import type { PageLoad } from './$types';

export const prerender = true;

export const load: PageLoad = async (event) => {
    const home = await import('$contents/2025-05-16-home.md');

    return {
        content: home.default,
    };
};