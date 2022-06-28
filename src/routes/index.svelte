<script>
  import { goto } from "$app/navigation"
  let name = ""

  function handleEnter(e) {
    if (e.key === "Enter") {
      goto(`/name/${name}`)
    }
  }
</script>

<main flex="~ col" items="center" space="y-8" m="y-10">
  <div flex="~" items="center">
    <div class="i-simple-icons-svelte" text="7xl" />
  </div>

  <p class="font-italic opacity-50">
    This is a svelte-kit template based on <a
      class="underline text-red-500 font-bold"
      href="https://github.com/Nico-Mayer/vide"
      target="_blank">Vide</a
    >
  </p>
  <input
    type="text"
    bg="transparent"
    border="~ coolgray-700 dark:warmgray-200 rounded-xl"
    p="x6 y1"
    outline="none"
    text="center"
    placeholder="What`s your name?"
    bind:value={name}
    on:keydown={handleEnter}
  />
</main>
