import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { Project } from '$lib/server/projects';

export const load: PageLoad = async (event) => {
    const slug = event.params.slug;
    
    try {
        const project: { default: any; metadata: Project } = await import(`$contents/projects/${slug}.md`);
        
        if (!project) {
            throw error(404, 'Projet non trouvé');
        }

        return {
            project: project.metadata,
            content: project.default,
        };
    } catch (e) {
        console.error("Erreur lors du chargement du projet:", e);
        throw error(404, 'Projet non trouvé');
    }
};