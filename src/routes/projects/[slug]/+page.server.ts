import type { EntryGenerator, PageServerLoad } from './$types';
import { getProjects } from '$lib/server/projects';

export const prerender = true;

/**
 * Communique à sveltekit les routes existantes pour pouvoir pré-rendre les pages
 * (comme un site statique)
 * @returns 
 */
export const entries: EntryGenerator = () => {
    const projects = getProjects();

    return projects.map((project) => {
        return {
            slug: project.slug,
        };
    });
}
