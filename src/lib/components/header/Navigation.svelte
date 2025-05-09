<script lang="ts">
    import { NavButton } from "$lib/components";
    import { page } from "$app/state"
    import {goto} from "$app/navigation";
</script>

<div>
    <NavButton text="Moi" selected={page.url.pathname === "/"} onclick={() => goto("/")}/>
    <NavButton text="Projets" selected={page.url.pathname.startsWith("/projects")} onclick={() => goto("/projects")}/>
    <NavButton text="Jeux" selected={page.url.pathname.startsWith("/games")} onclick={() => goto("/games")}/>
</div>

<style>
    div {
        display: flex;
        justify-content: center;
        column-gap: calc(var(--spacing) * 4);
    }
</style>