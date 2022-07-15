<script>
  import { page } from "$app/stores"
  import { goto } from "$app/navigation"

  let name = $page.params.name
</script>

<main class="my-8 flex flex-col items-center space-y-8">
  <div class="i-carbon-machine-learning text-5xl" />
  <div class="text-center">
    <p class="text-xl">
      Hello <span class="text-red-500 fot-bold">{name}</span> !
    </p>
    <p class="text-xs font-italic opacity-50">[Demo of dynamic route]</p>
  </div>

  <button class="btn" on:click={() => goto("/")}>Back</button>
</main>
