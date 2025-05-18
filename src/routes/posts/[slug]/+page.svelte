<script lang="ts">
  import type { PageData } from './$types';

  const { data }: { data: PageData } = $props()

  $inspect(data)    
</script>

<div>
  <h1>{data.post.title}</h1>
</div>

{@render data.content?.()}