
import { client } from '../lib/sanity';
import { groq } from 'next-sanity';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

async function debugSEO() {
    try {
        const query = groq`*[_type == "post"][0...10] {
      title,
      slug,
      "seo": seo,
      "hasMetaTitle": defined(seo.metaTitle),
      "hasMetaDescription": defined(seo.metaDescription),
      "metaDescriptionLength": length(seo.metaDescription)
    }`;

        const posts = await client.fetch(query);

        console.log(JSON.stringify(posts, null, 2));
    } catch (error) {
        console.error('Error fetching SEO data:', error);
    }
}

debugSEO();
