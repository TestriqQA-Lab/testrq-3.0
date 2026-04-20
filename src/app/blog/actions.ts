'use server';

import { sanityGetPostsBySlugs, sanityGetAllPostSlugs, Post } from "@/lib/sanity-data-adapter";

export async function getBlogPosts(page: number, postsPerPage: number = 9): Promise<{ posts: Post[], totalPages: number }> {
    try {
        // 1. Get total count using lightweight slug fetch
        const allSlugs = await sanityGetAllPostSlugs();
        const totalPages = Math.ceil(allSlugs.length / postsPerPage);

        // 2. Get slugs for requested page
        const pageSlugs = allSlugs.slice((page - 1) * postsPerPage, page * postsPerPage);

        // 3. Fetch posts by slugs
        let posts: Post[] = [];
        if (pageSlugs.length > 0) {
            posts = await sanityGetPostsBySlugs(pageSlugs);
        }

        return { posts, totalPages };
    } catch (error) {
        console.error("Error fetching paginated posts:", error);
        return { posts: [], totalPages: 0 };
    }
}
