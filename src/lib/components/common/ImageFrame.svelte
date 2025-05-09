<script lang="ts">
    let {
        children,
        class: className = "",
    } = $props();
</script>

<div class="{className}">
    <svg width="10" height="10" viewBox="0 0 5 5" class="corner" style="top: -4px;left:-4px"><path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path></svg>
    <svg width="10" height="10" viewBox="0 0 5 5" class="corner" style="top: -4px;right:-5px"><path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path></svg>
    <svg width="10" height="10" viewBox="0 0 5 5" class="corner" style="bottom: -5px;left:-4px"><path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path></svg>
    <svg width="10" height="10" viewBox="0 0 5 5" class="corner" style="bottom: -5px;right:-5px"><path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path></svg>
    {@render children?.()}
</div>

<style>
    div {
        position: relative;
    }
    .corner {
        position: absolute;
        fill: var(--foreground-color);
    }
</style>