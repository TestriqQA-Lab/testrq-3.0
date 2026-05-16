
import { NextResponse } from 'next/server';
import { client } from '@/lib/sanity';
import { groq } from 'next-sanity';

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        // F-60.1 — reports both new (seoFields) and legacy
        // (metaTitle/metaDescription) shapes so we can audit migration
        // progress per-document. `hasMetaTitle`/`hasMetaDescription`
        // report the *legacy* fields; `hasSeoTitle`/`hasSeoDescription`
        // report the *new* shared seoFields shape.
        const query = groq`*[_type == "post"][0...10] {
      title,
      slug,
      excerpt,
      seo,
      "hasSeoTitle": defined(seo.title),
      "hasSeoDescription": defined(seo.description),
      "hasMetaTitle": defined(seo.metaTitle),
      "hasMetaDescription": defined(seo.metaDescription)
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
