<script lang="ts">
    import { page } from "$app/state";
    import { BigSeparator, NavButton } from "$lib/components";
    import { type PageData } from "./$types";
    import "../styles/article.scss";
    
    const { data }: { data: PageData } = $props()

</script>

<main class="prose">
    {@render data.content?.()}
</main>


<style>
    main {
        padding: calc(var(--spacing) * 8);
    }
</style>