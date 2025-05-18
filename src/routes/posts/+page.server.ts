import { SvelteComponent, type Component } from 'svelte';
import type { PageServerLoad } from './$types';
import { getPosts } from '$lib/server/posts';

export const load: PageServerLoad = async (event) => {

    const posts = getPosts({
        draft: false,
    });

    return {
        posts: posts,
    };
};
