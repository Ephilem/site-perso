<script lang="ts">
    let { children } = $props();
</script>

<div class="timeline-content">
    {@render children?.()}
</div>

<style>
    .timeline-content {
        padding-left: 1.5em;
        padding-bottom: 1.5em;
        margin-top: 2px;
    }

    .timeline-content :global(h1) {
        margin: 0;
        font-size: 1.2em;
    }

    .timeline-content :global(h2) {
        margin: 0.3em 0 1em 0;
        font-weight: normal;
        font-style: italic;
        color: var(--foreground-muted-text-color);
        font-size: 1.1em;
    }

    .timeline-content :global(p) {
        text-indent: 0;
        margin: 0.5em 0;
    }

    .timeline-content :global(ul) {
        margin: 0.5em 0;
        padding-left: 1.5em;
    }

    .timeline-content :global(li) {
        margin-bottom: 0.3em;
    }

    .timeline-content :global(a) {
        color: var(--primary-color);
        text-decoration: underline;
    }
    
</style>