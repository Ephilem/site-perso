<script lang="ts">
    import type { Snippet } from "svelte";
    
    let {
        variant = "primary",
        size = "md",
        href = undefined,
        onclick = () => {},
        children,
    } : {
        variant?: "primary" | "outline",
        size?: "md" | "lg" | "icon",
        href?: string,
        onclick?: () => void,
        children: Snippet,
    } = $props();
</script>

{#if href}
    <a href={href} onclick={onclick} class="button"
       class:primary={variant === "primary"}
       class:outline={variant === "outline"}
       class:md={size === "md"}
       class:lg={size === "lg"}
       class:icon={size === "icon"}>
        {@render children?.()}
    </a>
{:else}
    <button type="button" onclick={onclick} class="button"
        class:primary={variant === "primary"}
        class:outline={variant === "outline"}
        class:md={size === "md"}
        class:lg={size === "lg"}
        class:icon={size === "icon"}>
        <div class="button-content">
            {@render children?.()}
        </div>
    </button>
{/if}

<style>
    .button {
        /* reset */
        all: unset;
        cursor: pointer;
        user-select: none;

        /* global styles */
        font-variant: all-small-caps;
        font-weight: 900;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden; /* Important for the pseudo-elements */
    }
    
    /* Effet d'assombrissement au clic */
    .button:active {
        filter: brightness(0.7);
    }

    .button-content {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 2; /* Above the pseudo-elements */
    }

    /* Size variants */
    .md {
        height: calc(var(--spacing) * 8);
        padding: 0 calc(var(--spacing) * 2);
        min-width: calc(var(--spacing) * 16);
    }

    .lg {
        height: calc(var(--spacing) * 10);
        padding: 0 calc(var(--spacing) * 3);
        min-width: calc(var(--spacing) * 20);
    }

    .icon {
        height: calc(var(--spacing) * 8);
        width: calc(var(--spacing) * 8);
        padding: 0;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
    
    /**************
    * primary button
    **************/
    
    .primary {
        color: var(--background-color);
        font-weight: bold;
        letter-spacing: 0.05rem;
        border: none;
        background-color: var(--primary-color);
        transition: color 0.3s ease-in-out;
        z-index: 1;
    }
    
    .primary::before {
        content: "";
        position: absolute;
        top: 0;
        left: -10%;
        width: 140%;
        height: 100%;
        background-color: var(--primary-color-hover);
        transform: skewX(-20deg) translateX(100%);
        transition: transform 0.3s ease-in-out;
        z-index: -1;
    }
    
    .primary:hover::before {
        transform: skewX(-20deg) translateX(0);
    }
    
    /* Remove the previous ::before and ::after styles and replace with this */
    .primary .button-content::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        width: 1.3rem;  /* Width to accommodate 3 squares with spacing */
        height: 0.3rem;
        z-index: 3;
        background-image: 
            linear-gradient(
                to right,
                var(--background-color) 0.0rem,
                var(--background-color) 0.3rem,
                transparent 0.3rem,
                transparent 0.5rem,
                var(--background-color) 0.5rem,
                var(--background-color) 0.8rem,
                transparent 0.8rem,
                transparent 1.0rem,
                var(--background-color) 1.0rem,
                var(--background-color) 1.3rem
            );
    }
    
    /**************
    * outline button
    **************/
    
    .outline {
        color: var(--foreground-color);
        font-weight: bold;
        letter-spacing: 0.05rem;
        border: 1px solid var(--foreground-color);
        background-color: transparent;
        transition: color 0.3s ease-in-out;
        z-index: 1;
    }
    
    .outline::before {
        content: "";
        position: absolute;
        top: 0;
        left: -10%;
        width: 140%;
        height: 100%;
        background-color: var(--foreground-color);
        transform: skewX(-20deg) translateX(100%);
        transition: transform 0.3s ease-in-out;
        z-index: -1;
    }
    
    .outline:hover {
        color: var(--background-color);
    }
    
    .outline:hover::before {
        transform: skewX(-20deg) translateX(-10%);
    }
</style>