<script lang="ts">
</script>

<div class="timeline-separator">
    <div class="line"></div>
    <div class="dot"></div>
</div>


<style>
    .timeline-separator {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .dot {
        margin-top: 8px;

        width: 16px;
        height: 16px;

        border-radius: 50%;

        background-color: var(--primary-color);

        z-index: 2;
    }

    .line {
        position: absolute;
        top: 16px;
        width: 2px;
        height: calc(100% + 8px);

        background-image: repeating-linear-gradient(
                360deg,
                var(--foreground-muted-color) 0px,
                var(--foreground-muted-color) 1px,
                transparent 1px,
                transparent 50%
        );
        background-size: 10px 10px;
        background-attachment: fixed;

        z-index: 1;
    }
</style>