// Simple HTML entity decoding that works on both server and client
export const decodeHtmlEntities = (html: string): string => {
  // Common HTML entities mapping
  const entityMap: Record<string, string> = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'", // Corrected single quote
    '&#8217;': "'", // Right single quotation mark
    '&#8220;': '"', // Left double quotation mark
    '&#8221;': '"', // Right double quotation mark
    '&#8211;': '–', // En dash
    '&#8212;': '—', // Em dash
    '&#8230;': '…', // Horizontal ellipsis
    '&nbsp;': ' ',
    '&hellip;': '…',
    '&mdash;': '—',
    '&ndash;': '–',
    '&lsquo;': "'", // Corrected single quote
    '&rsquo;': "'", // Corrected single quote
    '&ldquo;': '"',
    '&rdquo;': '"',
  };

  let decoded = html;
  
  // Replace named entities
  Object.entries(entityMap).forEach(([entity, replacement]) => {
    decoded = decoded.replace(new RegExp(entity, 'g'), replacement);
  });

  // Replace numeric entities (&#123; format)
  decoded = decoded.replace(/&#(\d+);/g, (match, dec) => {
    return String.fromCharCode(parseInt(dec, 10));
  });

  // Replace hex entities (&#x1A; format)
  decoded = decoded.replace(/&#x([0-9A-Fa-f]+);/g, (match, hex) => {
    return String.fromCharCode(parseInt(hex, 16));
  });

  return decoded;
};



export function extractStructuredData(htmlContent: string): unknown[] {
  const scriptRegex = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g;
  let match;
  const structuredData: unknown[] = [];

  while ((match = scriptRegex.exec(htmlContent)) !== null) {
    let jsonString = match[1].trim();

    // Find the actual JSON content within the extracted string
    const firstBrace = jsonString.indexOf("{");
    const firstBracket = jsonString.indexOf("[");
    const lastBrace = jsonString.lastIndexOf("}");
    const lastBracket = jsonString.lastIndexOf("]");

    let startIndex = -1;
    let endIndex = -1;

    if (firstBrace !== -1 && (firstBracket === -1 || firstBrace < firstBracket)) {
      startIndex = firstBrace;
      endIndex = lastBrace;
    } else if (firstBracket !== -1) {
      startIndex = firstBracket;
      endIndex = lastBracket;
    }

    if (startIndex !== -1 && endIndex !== -1 && endIndex > startIndex) {
      jsonString = jsonString.substring(startIndex, endIndex + 1);
    } else {
      console.warn("Could not find valid JSON start/end in script tag content:", jsonString.substring(0, 200));
      continue;
    }

    try {
      const jsonData = JSON.parse(jsonString);
      structuredData.push(jsonData);
    } catch (error) {
      console.error("Error parsing structured data JSON:", error);
      const problematicJsonSnippet = jsonString.substring(0, 200);
      console.error("Problematic JSON string (first 200 chars): ", problematicJsonSnippet);
    }
  }
  return structuredData;
}