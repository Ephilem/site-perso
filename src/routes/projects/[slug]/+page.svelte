<script lang="ts">
    import type { PageData } from './$types';
    import '$src/styles/article.scss';
    
    let { data } = $props();
    
    const { project, content } = data;
</script>

<svelte:head>
    <title>{project.title} | Projets</title>
    <meta name="description" content={project.description} />
</svelte:head>

<main>
    <article class="project prose">
        <header>
            <h1>{project.title}</h1>
            {#if project.tags}
            <div class="tags">
                {#each project.tags as tag}
                <span class="tag">{tag}</span>
                {/each}
            </div>
            {/if}
            <p class="description">{project.description}</p>

            {#if project.preview}
                <img src={project.preview} alt={project.title} width="100%" />
            {/if}

            <div class="project-infos">
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
                </div>
                <div class="project-links">
                    {#if project.github}
                    <a href={project.github} target="_blank" rel="noopener noreferrer" class="project-link github">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Material Design Icons by Pictogrammers - https://github.com/Templarian/MaterialDesign/blob/master/LICENSE --><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/></svg>
                        
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
        align-items: center;
        gap: 1rem;
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
    
    .project-infos {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 2em;
    }

    .project-links {
        display: flex;
        gap: 1rem;
    }
    
    .project-link {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        text-decoration: none;
        font-weight: bold;
        color: var(--foreground-color);
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