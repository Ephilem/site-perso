<script lang="ts">

    let {
        class: className = "",
    } = $props();
</script>

<div class={className}>
</div>

<style>
    div {
        width: 100%;
        height: calc(var(--spacing) * 5);

        background-image: repeating-linear-gradient(
                315deg,
                var(--foreground-muted-color) 0px,
                var(--foreground-muted-color) 1px,
                transparent 1px,
                transparent 50%
        );
        background-size: 10px 10px;
        background-attachment: fixed;
    }
</style>