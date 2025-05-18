<script lang="ts">
    const { children } = $props();
</script>

<div class="timeline">
    {@render children?.()}
</div>

<style>
    .timeline {
        display: flex;
        flex-direction: column;
        gap: 0;
        margin: 2em 0 3em 0;
    }
</style> 