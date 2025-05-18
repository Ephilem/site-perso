<script lang="ts">
    import { NavButton } from "$lib/components";
    import { page } from "$app/state"
    import {goto} from "$app/navigation";

    let connected = $derived(!!page.data.user);
</script>

<nav>
    <NavButton text="Moi" selected={page.url.pathname === "/"} href="/"/>
    <!-- <NavButton text="Projets" selected={page.url.pathname.startsWith("/projects")} href="/projects"/>
    <NavButton text="Posts" selected={page.url.pathname.startsWith("/posts")} href="/posts"/> -->
    <!-- <NavButton text="Jeux" selected={page.url.pathname.startsWith("/games")} href="/games"/> -->
</nav>

<style>
    nav {
        display: flex;
        position: relative;
        justify-content: center;
        column-gap: calc(var(--spacing) * 4);
    }
</style>