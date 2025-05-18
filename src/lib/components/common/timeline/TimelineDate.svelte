<script lang="ts">
    
    let { children } = $props();

</script>

<div class="timeline-date">
    {@render children?.()}
</div>



<style>
    .timeline-date {
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
        padding-top: 6px;
        padding-right: 1.5em;
        font-weight: bold;
    }
</style>