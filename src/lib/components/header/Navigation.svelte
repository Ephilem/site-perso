<script lang="ts">
    import { NavButton } from "$lib/components";
    import { page } from "$app/state"
    import {goto} from "$app/navigation";

    let connected = $derived(!!page.data.user);
</script>

<nav>
    <NavButton text="Moi" selected={page.url.pathname === "/"} onclick={() => goto("/")}/>
    <NavButton text="Projets" selected={page.url.pathname.startsWith("/projects")} onclick={() => goto("/projects")}/>
    <NavButton text="Jeux" selected={page.url.pathname.startsWith("/games")} onclick={() => goto("/games")}/>

    <div class="connected-indicator">
        {connected}
    </div>
</nav>

<style>
    nav {
        display: flex;
        position: relative;
        justify-content: center;
        column-gap: calc(var(--spacing) * 4);
    }

    div {
        position: absolute;
        right: 0;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>