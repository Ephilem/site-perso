<script lang="ts">
    import { Button } from "$components";
    import type { Project } from '$lib/server/projects';

    let { project }: { project: Project } = $props();
</script>

<div class="project-element">
    {#if project.preview}
        <img 
            src={project.preview}
            alt={project.title}
        />
    {:else}
        <div class="gradient-placeholder"></div>
    {/if}
    <div class="content">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <div class="technologies">
            {#each project.technologies as tech}
                <span class="tech-pill">{tech}</span>
            {/each}
        </div>
    </div>
    <div class="action">
        {#if project.website}
            <Button variant="outline" size="icon" href={project.website}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m-1 17.93c-3.95-.49-7-3.85-7-7.93c0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41c0 2.08-.8 3.97-2.1 5.39"/></svg>
            </Button>
        {/if}
        {#if project.github}
            <Button variant="outline" size="icon" href={project.github}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/></svg>
            </Button>
        {/if}
        <Button variant="outline" size="icon" href={`/projects/${project.slug}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12.6 12L8 7.4L9.4 6l6 6l-6 6L8 16.6z"/></svg>
        </Button>
    </div>
</div>

<style>
    .project-element {
        display: grid;
        position: relative;

        grid-template-columns: 4fr 8fr;
        grid-template-rows: 1fr auto;
        grid-template-areas: "image content" "image action";     
        column-gap: calc(var(--spacing) * 3);

        height: 10rem;

        padding: calc(var(--spacing) * 2);
        margin: calc(var(--spacing) * 2) 0;
        position: relative;
        box-sizing: border-box;

        border: 1px solid var(--foreground-muted-color);
    }

    .project-element::before {
        content: "";
        position: absolute;
        top: -5px;
        left: -5px;
        width: 4px;
        height: 4px;
        border-bottom: 1px solid var(--foreground-muted-color);
        border-right: 1px solid var(--foreground-muted-color);
    }
    .project-element::after {
        content: "";
        position: absolute;
        bottom: -5px;
        right: -5px;
        width: 4px;
        height: 4px;
        border-top: 1px solid var(--foreground-muted-color);
        border-left: 1px solid var(--foreground-muted-color);
    }   
    .project-element .content::before {
        content: "";
        position: absolute;
        top: -5px;
        right: -5px;
        width: 4px;
        height: 4px;
        border-bottom: 1px solid var(--foreground-muted-color);
        border-left: 1px solid var(--foreground-muted-color);
    }
    .project-element .content::after {
        content: "";
        position: absolute;
        bottom: -5px;
        left: -5px;
        width: 4px;
        height: 4px;
        border-top: 1px solid var(--foreground-muted-color);
        border-right: 1px solid var(--foreground-muted-color);
    }
    
    .project-element > img {
        grid-area: image;
        object-fit: cover;
        width: 100%;
        aspect-ratio: 16/9;
    }
    .gradient-placeholder {
        grid-area: image;
        width: 100%;
        aspect-ratio: 16/9;
        background: var(--primary-color);
    }

    .content {
        grid-area: content;
    }
    .content > h2 {
        margin: 0;
    }
    .content > p {
        margin: 0;
    }

    .technologies {
        display: flex;
        flex-wrap: wrap;
        gap: var(--spacing);
        margin-top: calc(var(--spacing) * 1);
    }

    .tech-pill {
        font-size: 0.8rem;
        padding: 0.2rem 0.5rem;
        background-color: var(--foreground-muted-color);
        border-radius: 1rem;
        color: var(--background-color);
    }

    .action {
        display: flex;
        justify-content: flex-end;
        grid-area: action;
        column-gap: calc(var(--spacing) * 2);
    }
</style>