const fs = require('fs');
const filePath = 'src/components/seo/StructuredData.tsx';
let content = fs.readFileSync(filePath, 'utf-8');

// Remove the orphaned fragment between uatServiceSchema closing and tdmFAQSchema
// The orphaned fragment is:
// "name": "TDM for Performance & Load Testing",
//   "description": "Provisioning massive datasets for resilience and scalability validation."
//     }
//   }
//     ]
//   }
// };
// This whole chunk appears right after }; (end of uatServiceSchema) and before export const tdmFAQSchema

const orphanStart = '};\n"name": "TDM for Performance & Load Testing"';
const orphanEnd = '\nexport const tdmFAQSchema';

const searchStart = content.indexOf(orphanStart);
const searchEnd = content.indexOf(orphanEnd);

console.log('Orphan start idx:', searchStart);
console.log('Orphan end idx:', searchEnd);

if (searchStart === -1 || searchEnd === -1) {
    // Try with \r\n (CRLF)
    const orphanStartCrlf = '};\r\n"name": "TDM for Performance';
    const s2 = content.indexOf(orphanStartCrlf);
    const e2 = content.indexOf('\r\nexport const tdmFAQSchema');
    console.log('CRLF orphan start:', s2, 'CRLF end:', e2);
    if (s2 !== -1 && e2 !== -1) {
        // Keep the "};" and then jump straight to tdmFAQSchema
        const before = content.slice(0, s2 + 2); // keep "};"
        const after = content.slice(e2);          // from \r\nexport const tdmFAQSchema
        const newContent = before + after;
        fs.writeFileSync(filePath, newContent, 'utf-8');
        console.log('Fixed (CRLF). New length:', newContent.length);
        return;
    }
    console.error('Patterns not found - check file manually');
    process.exit(1);
}

const before = content.slice(0, searchStart + 2); // keep "};"
const after = content.slice(searchEnd);
const newContent = before + after;
fs.writeFileSync(filePath, newContent, 'utf-8');
console.log('Fixed. New length:', newContent.length);
