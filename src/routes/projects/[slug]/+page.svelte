<script lang="ts">
    import type { PageData } from './$types';
    
    let { data } = $props();
    
    const { project, content } = data;
</script>

<svelte:head>
    <title>{project.title} | Projets</title>
    <meta name="description" content={project.description} />
</svelte:head>

<main>
    <article class="project">
        <header>
            <h1>{project.title}</h1>
            {#if project.tags}
            <div class="tags">
                <span class="tag">{project.tags.join(', ')}</span>
            </div>
            {/if}
            <p class="description">{project.description}</p>

            {#if project.preview}
                <img src={project.preview} alt={project.title} width="100%" />
            {/if}

            <div class="project-meta">
                <div class="meta-item">
                    <span class="label">Date:</span>
                    <span class="value">{new Date(project.date).toLocaleDateString('fr-FR')}</span>
                </div>
                
                {#if project.updated}
                <div class="meta-item">
                    <span class="label">Mis à jour:</span>
                    <span class="value">{new Date(project.updated).toLocaleDateString('fr-FR')}</span>
                </div>
                {/if}
                
                <div class="project-links">
                    {#if project.github}
                    <a href={project.github} target="_blank" rel="noopener noreferrer" class="project-link github">
                        GitHub
                    </a>
                    {/if}
                    
                    {#if project.website}
                    <a href={project.website} target="_blank" rel="noopener noreferrer" class="project-link website">
                        Site Web
                    </a>
                    {/if}
                </div>
            </div>
        </header>
        
        <div class="project-content">
            {@render content?.()}
        </div>
    </article>
</main>

<style>
    .project {
        max-width: 800px;
        margin: 0 auto;
        padding: 2rem 1rem;
    }
    
    .project header {
        margin-bottom: 2rem;
    }
    
    header > h1 {
        font-size: 2.5rem;
        margin: 0.5rem 0;
    }
    
    .description {
        font-size: 1.2rem;
        color: #666;
        margin-bottom: 1.5rem;
    }
    
    .project-meta {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        margin-bottom: 1.5rem;
    }
    
    .meta-item {
        margin-right: 1.5rem;
        margin-bottom: 0.5rem;
    }
    
    .label {
        font-weight: bold;
        margin-right: 0.5rem;
    }
    
    .technologies {
        width: 100%;
    }
    
    .tech-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-top: 0.5rem;
    }
    
    .tech-tag {
        background-color: #f0f0f0;
        padding: 0.25rem 0.75rem;
        border-radius: 20px;
        font-size: 0.9rem;
    }
    
    .project-links {
        display: flex;
        gap: 1rem;
        margin-top: 1rem;
    }
    
    .project-link {
        display: inline-block;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        text-decoration: none;
        font-weight: bold;
    }
    
    .github {
        background-color: #24292e;
        color: white;
    }
    
    .website {
        background-color: #0070f3;
        color: white;
    }
    
    .project-content {
        line-height: 1.6;
    }
    
    .project-content :global(h2) {
        font-size: 1.8rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
    }
    
    .project-content :global(p) {
        margin-bottom: 1rem;
    }
    
    .project-content :global(img) {
        max-width: 100%;
        height: auto;
        margin: 1.5rem 0;
    }

    .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-top: 0.5rem;
    }
    .tag {
        background-color: var(--foreground-color);
        color: var(--background-color);
        padding: 0.10rem 0.50rem;
        font-size: 1.1rem;
        font-variant: all-small-caps;
        font-weight: 900;
        user-select: none;
    }
</style>