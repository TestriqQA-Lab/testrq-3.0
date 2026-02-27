
import { NextResponse } from 'next/server';
import { client } from '@/lib/sanity';
import { groq } from 'next-sanity';

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        const query = groq`*[_type == "post"][0...10] {
      title,
      slug,
      excerpt,
      seo,
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
