import type { Snippet } from "svelte";

export interface Post {
    slug: string;
    title: string;
    description: string;
    date: Date;
    tags: string[];
    categories: string[];
    preview: string;
    draft: boolean;
}

export interface PostsQuery {
    tags?: string[];
    search?: string;
    draft?: boolean;
}

const getSlug = (path: string): string => {
    const parts = path.split('/');
    const fileName = parts[parts.length - 1];
    return fileName.replace('.md', '');
}

export const getPosts = (query: PostsQuery = {}): Post[] => {
    let posts: Post[] = [];

    const glob = import.meta.glob<{ default: any; metadata: Post }>(
        '$contents/posts/*.md',
        { eager: true }
    );

    for (const key in glob) {
        const post = glob[key];
        if (post.metadata) {
            posts.push({
                ...post.metadata,
                slug: getSlug(key),
            });
        }
    }

    // Filter posts based on query
    posts = posts.filter((post) => {
        if (query.draft !== undefined) {
            return post.draft === query.draft;
        }

        return true;
    });

    return posts;
}

export const getPost = (slug: string): Post | undefined => {
    const posts = getPosts({});
    console.log("Getting post", slug);
    return posts.find(post => post.slug === slug);
}