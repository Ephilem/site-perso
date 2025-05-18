<script lang="ts">
    import PostElement from "$components/posts/PostElement.svelte";
    import type { PageData } from "./$types";

    const { data }: { data: PageData } = $props();
</script>


<main>
    <h1>Mes posts</h1>

    {#if data.posts.length > 0}
        {#each data.posts as post}
            <PostElement {post} />
        {/each}
    {:else}
        <span>
            Je n'ai pas encore écrit de postes. Mais je compte en écrire un
            prochainement.
        </span>
    {/if}

</main>

<style>
    main {
        padding: calc(var(--spacing) * 8);
    }

    main > h1 {
        position: relative;
        font-size: 2.5rem;
        margin: 0.5rem 0;
    }
    main > h1:nth-of-type(n+2) {
        margin-top: 1.2em;
    }
    main > h1:nth-of-type(n+2)::before {
        content: "";
        position: absolute;
        top: -0.5em;
        width: 100%;
        height: 2px;
        border-top: 1px dashed var(--foreground-muted-color);
    }

    main > span {
        display: block;
        margin-top: 2em;
        font-style: italic;
        text-align: center;
        color: var(--foreground-muted-color);
    }
</style>