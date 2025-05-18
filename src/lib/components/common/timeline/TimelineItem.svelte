<script lang="ts">
    let { children } = $props();
</script>

<div class="timeline-item">
    {@render children?.()}
</div>

<style>
    .timeline-item {
        display: grid;
        grid-template-columns: 3fr 1fr 8fr;
        min-height: 120px;
    }

    .timeline-item:last-child :global(.line) {
        display: none;
    }
    
</style>