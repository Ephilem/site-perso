<script lang="ts">
    import ProjectElement from '$components/projects/ProjectElement.svelte';
    import type { PageData } from './$types';

    const { data }: { data: PageData } = $props()
</script>

<main>
    <div class="projects-header">
        <h1>Mes projets</h1>
        <div> Non exhaustive </div>
    </div>

    {#if data.projects.length > 0}
        {#each data.projects as project}
            <ProjectElement {project} />
        {/each}
    {:else}
        <span>
            Je n'ai pas encore de posts. Mais je compte en créer prochainement !
        </span>
    {/if}
</main>

<style>
    main {
        padding: calc(var(--spacing) * 8);
    }

    .projects-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .projects-header > h1 {
        font-size: 2.5rem;
        margin: 0.5rem 0;
    }
    .projects-header > h1:nth-of-type(n+2) {
        margin-top: 1.2em;
    }
    .projects-header > h1:nth-of-type(n+2)::before {
        content: "";
        position: absolute;
        top: -0.5em;
        width: 100%;
        height: 2px;
        border-top: 1px dashed var(--foreground-muted-color);
    }
    .projects-header > div {
        font-size: 0.9rem;
        color: var(--foreground-muted-color);

    }

    main > span {
        display: block;
        margin-top: 2em;
        font-style: italic;
        text-align: center;
        color: var(--foreground-muted-color);
    }
</style>