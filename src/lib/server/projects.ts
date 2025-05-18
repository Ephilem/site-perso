import type { Snippet } from "svelte";

export interface Project {
    slug: string;
    title: string;
    description: string;
    date: Date;
    updated?: Date;
    github?: string;
    preview?: string;
    draft?: boolean;
    website?: string;
    tags: string[];
    categories: string[];
}

export interface ProjectsQuery {
    draft?: boolean;
    search?: string;
}

const getSlug = (path: string): string => {
    const parts = path.split('/');
    const fileName = parts[parts.length - 1];
    return fileName.replace('.md', '');
}

export const getProjects = (query: ProjectsQuery = {}): Project[] => {
    let projects: Project[] = [];

    const glob = import.meta.glob<{ default: any; metadata: Project }>(
        '$contents/projects/*.md',
        { eager: true }
    );

    for (const key in glob) {
        const project = glob[key];
        if (project.metadata) {
            projects.push({
                ...project.metadata,
                slug: getSlug(key),
            });
        }
    }

    projects = projects.filter((project) => {

        if (query.draft) {
            return !project.draft;
        }

        if (query.search) {
            const searchLower = query.search.toLowerCase();
            return (
                project.title.toLowerCase().includes(searchLower) ||
                project.description.toLowerCase().includes(searchLower)
            );
        }

        return true;
    });

    return projects.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

export const getProject = (slug: string): Project | undefined => {
    const projects = getProjects({});
    return projects.find(project => project.slug === slug);
}