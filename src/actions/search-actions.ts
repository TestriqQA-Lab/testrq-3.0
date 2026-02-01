'use server';

import { sanitySearchPosts } from "@/lib/sanity-data-adapter";
import { Post } from "@/lib/sanity-data-adapter";

export async function performSearch(query: string): Promise<Post[]> {
    if (!query) return [];
    return await sanitySearchPosts(query);
}
