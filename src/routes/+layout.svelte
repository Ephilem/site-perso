<script lang="ts">
    import "../fonts.css";
    import "../app.css";

    import {
        BigSeparator,
        Navigation,
    } from "$lib/components";
    import {setContext} from "svelte";

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
                    src="src/assets/pp.webp"
                    alt="Profile Picture"
                    width="128"
                    height="128"
            />
            <h1>Raphaël AIMÉ</h1>
            <p>
                Étudiant en 3ème année de BUT Informatique à l'IUT de Vannes
            </p>
        </header>
        <BigSeparator />
        <Navigation />
        <div class="separator"></div>
        <div>
            {@render children()}
        </div>
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
        margin: 0;
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
</style>