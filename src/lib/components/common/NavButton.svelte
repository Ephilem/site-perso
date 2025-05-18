<script lang="ts">
    let {
        text = "Button",
        class: className = "",
        selected = false,
        textSize = 18,
        href = "#"
    } = $props();

    let characters = $derived(text.split(""));
</script>

<a class="text-button {selected ? 'selected' : ''}" href={href}>
    <div class="button-content {className}">
        <div class="text-container" style="font-size: {textSize}px; line-height: {textSize}px">
            <span class="transparent-text" style="font-size: {textSize}px">{text}</span>

            <div class="character-container default-text">
                {#each characters as char, i}
                  <span
                          class="character"
                          style="transition-delay: {i * 10}ms;"
                  >{char}</span>
                {/each}
            </div>

            <div class="character-container hover-text">
                {#each characters as char, i}
                  <span
                          class="character"
                          style="transition-delay: {i * 10}ms;"
                  >{char}</span>
                {/each}
            </div>
        </div>

        <div class="circle left"></div>
        <div class="circle right"></div>
    </div>
</a>

<style>
    .text-button {
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        transition: all 150ms;
        background: transparent;
        border: none;
        cursor: pointer;
        font-family: "IBM Plex Mono", monospace;
        font-weight: 900;
        font-variant-caps: all-petite-caps;

        margin: 8px 0;
        padding: 6px 16px;
    }

    .text-button.selected {
        background-color: var(--primary-color);
    }

    .button-content {
        position: relative;
    }

    .text-container {
        position: relative;
        overflow: hidden;
        display: flex;
    }

    .transparent-text {
        color: transparent;
    }

    .character-container {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
    }

    .default-text {
        color: white;
    }

    .selected .default-text {
        color: var(--primary-content-text-color);
    }

    .hover-text {
        color: var(--primary-color);
    }

    .character {
        display: inline-block;
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        will-change: transform;
    }

    .default-text .character {
        transform: translateY(0);
    }

    .hover-text .character {
        transform: translateY(100%);
    }

    /* animation seulement si c'est sélectionner */
    .text-button:not(.selected):hover .default-text .character {
        transform: translateY(-100%);
    }

    .text-button:not(.selected):hover .hover-text .character {
        transform: translateY(0);
    }

    .circle {
        position: absolute;
        top: 50%;
        width: 4px;
        height: 4px;
        background-color: var(--primary-color);
        border-radius: 50%;
        transform: translateY(-50%) scaleX(4);
        opacity: 0;
        filter: blur(1px);
        pointer-events: none;
        transition: opacity 0.2s, transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), filter 0.2s;
    }

    .circle.left {
        left: -12px;
        transform: translateY(-50%) translateX(-8px) scaleX(4);
    }

    .circle.right {
        right: -12px;
        transform: translateY(-50%) translateX(8px) scaleX(4);
    }

    /* Apparition des cercles seulement si c'est pas selectionné */
    .text-button:not(.selected):hover .circle {
        opacity: 1;
        transform: translateY(-50%) translateX(0) scaleX(1);
        filter: blur(0);
    }
</style>