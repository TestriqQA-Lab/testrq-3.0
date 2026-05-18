
import { NextResponse } from 'next/server';
import { client } from '@/lib/sanity';
import { groq } from 'next-sanity';

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        // F-60.1 cleanup — legacy metaTitle/metaDescription probe paths
        // dropped now that migration is complete. Reports only the new
        // shared seoFields shape (`{title, description, keywords[]}`).
        const query = groq`*[_type == "post"][0...10] {
      title,
      slug,
      excerpt,
      seo,
      "hasSeoTitle": defined(seo.title),
      "hasSeoDescription": defined(seo.description),
      "hasSeoKeywords": defined(seo.keywords) && count(seo.keywords) > 0
    }`;

        const posts = await client.fetch(query);

        return NextResponse.json({
            count: posts.length,
            posts
        });
    } catch (error) {
        return NextResponse.json({ error: String(error) }, { status: 500 });
    }
}
