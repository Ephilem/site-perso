import type { EntryGenerator, PageServerLoad } from './$types';
import { getPosts } from '$lib/server/posts';

export const prerender = true;

/**
 * Communique à sveltekit les routes existantes pour pouvoir pré-rendre les pages
 * (comme un site statique)
 * @returns 
 */
export const entries: EntryGenerator = () => {
    const posts = getPosts();

    const paths = posts.map((post) => {
        return {
            slug: post.slug,
        };
    });

    return paths;
}
