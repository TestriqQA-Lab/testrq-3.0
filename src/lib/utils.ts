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

