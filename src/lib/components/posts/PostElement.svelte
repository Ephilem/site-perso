<script lang="ts">
    import { Button } from "$components";
    import type { Post } from "$lib/server/posts";

    const {
        post,
    } : {
        post: Post,
    } = $props();
</script>

<div class="post-element">
    {#if post.preview}
        <img 
            src={post.preview}
            alt={post.title}
        />
    {:else}
        <div class="gradient-placeholder"></div>
    {/if}
    <div class="content">
        <h2>{post.title}</h2>
        <p>{post.description}</p>
    </div>
    <div class="action">
        <Button variant="outline" size="icon" href={`/posts/${post.slug}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12.6 12L8 7.4L9.4 6l6 6l-6 6L8 16.6z"/></svg>
        </Button>
    </div>
</div>

<style>
    .post-element {
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

    .post-element::before {
        content: "";
        position: absolute;
        top: -5px;
        left: -5px;
        width: 4px;
        height: 4px;
        border-bottom: 1px solid var(--foreground-muted-color);
        border-right: 1px solid var(--foreground-muted-color);
    }
    .post-element::after {
        content: "";
        position: absolute;
        bottom: -5px;
        right: -5px;
        width: 4px;
        height: 4px;
        border-top: 1px solid var(--foreground-muted-color);
        border-left: 1px solid var(--foreground-muted-color);
    }   
    .post-element .content::before {
        content: "";
        position: absolute;
        top: -5px;
        right: -5px;
        width: 4px;
        height: 4px;
        border-bottom: 1px solid var(--foreground-muted-color);
        border-left: 1px solid var(--foreground-muted-color);
    }
    .post-element .content::after {
        content: "";
        position: absolute;
        bottom: -5px;
        left: -5px;
        width: 4px;
        height: 4px;
        border-top: 1px solid var(--foreground-muted-color);
        border-right: 1px solid var(--foreground-muted-color);
    }
    
    
    .post-element > img {
        grid-area: image;
        object-fit: cover;
        width: 100%;
        aspect-ratio: 16/9;
        box-shadow: 0.5em 0.5em 0 0 var(--foreground-muted-color);
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

    .action {
        display: flex;
        justify-content: flex-end;
        grid-area: action;
        column-gap: calc(var(--spacing) * 2);
    }
</style>
