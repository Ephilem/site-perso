<script lang="ts">
    import "../styles/fonts.css";
    import "../styles/app.css";

    import {
        BigSeparator,
        Navigation,
    } from "$lib/components";
        import {setContext} from "svelte";
    import pp from "$lib/assets/pp.webp";
    import { fade, fly } from 'svelte/transition';

    let {data, children} = $props();

    setContext("user", data.user)
</script>

<div class="base-container">
    <div></div>
    <div></div>
    <div></div>
    <div class="main-content">
        <svg width="10" height="10" viewBox="0 0 5 5" class="corner" style="top: -4px;left:-4px"><path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path></svg>
        <svg width="10" height="10" viewBox="0 0 5 5" class="corner" style="top: -4px;right:-5px"><path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path></svg>
        <svg width="10" height="10" viewBox="0 0 5 5" class="corner" style="bottom: -5px;left:-4px"><path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path></svg>
        <svg width="10" height="10" viewBox="0 0 5 5" class="corner" style="bottom: -5px;right:-5px"><path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path></svg>
        <header>
            <img
                    src={pp}
                    alt="Profile Picture"
                    width="128"
                    height="128"
            />
            <h1>Raphaël AIMÉ</h1>
            <div class="subtitle-container">
                <p>
                    Étudiant en 3ème année de BUT Informatique à l'IUT de Vannes
                </p>
                <div class="links-container">
                    <a href="/cv.pdf" target="_blank" title="Voir mon CV">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                            <polyline points="14 2 14 8 20 8"/>
                        </svg>
                        <span>CV</span>
                    </a>
                    <a href="https://github.com/Ephilem" target="_blank" title="Voir mon GitHub">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Material Design Icons by Pictogrammers - https://github.com/Templarian/MaterialDesign/blob/master/LICENSE --><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/></svg>
                        <span>GH</span>
                    </a>
                </div>
            </div>
        </header>
        <BigSeparator />
        <Navigation />
        <div class="separator"></div>
        {#key data.url}
            <div class="page-content" 
                 in:fly={{ x: 20, y: 0, duration: 300, delay: 300, opacity: 0 }} 
                 out:fly={{ x: -20, y: 0, duration: 300, opacity: 0 }}>
                {@render children()}
            </div>
        {/key}
    </div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
</div>

<style>
    .base-container {
        display: grid;

        width: 100%;
        min-height: 100vh;

        grid-template-columns: auto 848px auto;
        grid-template-rows: 28px 100% 28px;

        position: relative;
    }
    .base-container > * {
        box-shadow: 1px 1px 0 0 var(--foreground-muted-color);
    }

    .main-content {
        grid-column: 2;
        grid-row: 2;
        position: relative;
        transition: transform 0.3s ease-in-out;
    }
    .corner {
        position: absolute;
        fill: var(--foreground-color);
    }

    header {
        display: grid;

        grid-template-columns: auto 1fr;
        grid-template-rows: 1fr 1fr;
    }
    header > img {
        margin: calc(var(--spacing) * 10);

        grid-column: 1;
        grid-row: 1 / span 2;

        box-shadow: 0.5em 0.5em 0 0 var(--foreground-muted-color);
    }
    header > h1 {
        align-self: end;
        margin: calc(var(--spacing) * 2) 0;
    }

    .separator {
        position: relative;
        border-bottom: 1px solid var(--foreground-muted-color);
    }
    .separator::after {
        content: "";
        position: absolute;
        display: block;
        width: 100%;
        height: 1px;
        bottom: -3px;
        border-bottom: 1px solid var(--foreground-muted-color);
    }

    .subtitle-container {
        display: flex;
        flex-direction: column;
        gap: calc(var(--spacing) * 2);
    }
    .subtitle-container > p {
        margin: 0;
    }

    .links-container {
        display: flex;
        gap: calc(var(--spacing) * 2);
    }

    .links-container > a {
        display: inline-flex;
        align-items: center;
        gap: 0.25rem;
        color: var(--text-color-secondary);
        text-decoration: none;
        font-size: 0.8rem;
        padding: 0.25rem 0.5rem;
        font-variant: small-caps;
        color: var(--background-color);
        font-weight: 800;
        transition: all 0.2s ease;
        background-color: var(--foreground-color);
    }

    .links-container > a:hover {
        color: var(--text-color);
        background-color: var(--foreground-muted-color);
    }

    .links-container > a svg {
        width: 14px;
        height: 14px;
    }
</style>