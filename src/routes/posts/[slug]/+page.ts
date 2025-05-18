import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { Post } from '$lib/server/posts';

export const load: PageLoad = async (event) => {
    const slug = event.params.slug;
    console.log("Getting post ", slug);
    const post: { default: any; metadata: Post } = await import(`$contents/posts/${slug}.md`);
    
    // if (!post || post.metadata.draft) {
    //     throw error(404, 'Post not found');
    // }

    return {
        post: post.metadata,
        content: post.default,
    };
};