import { getProjects } from '$lib/server/projects';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
    const projects = getProjects({ draft: true });
    return {
        projects: projects,
    };
};
