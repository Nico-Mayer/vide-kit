<script>
  import { page } from "$app/stores"
  import { goto } from "$app/navigation"

  let name = $page.params.name
</script>

<main m="y8" flex="~ col" items="center" space="y8">
  <div class="i-carbon-machine-learning text-5xl" />
  <div text="center">
    <p text="xl">Hello <span text="red-500" font="bold">{name}</span> !</p>
    <p text="sm" font="italic" opacity="50">[Demo of dynamic route]</p>
  </div>

  <button class="btn" on:click={() => goto("/")}>Back</button>
</main>
