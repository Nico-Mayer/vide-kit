<script>
  import { goto } from "$app/navigation"
  let name = ""

  function handleEnter(e) {
    if (e.key === "Enter") {
      goto(`/name/${name}`)
    }
  }
</script>

<main class="flex flex-col items-center space-y-8 my-10">
  <div class="flex items-center">
    <div class="i-simple-icons-svelte text-7xl" />
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
    class="bg-transparent border border-cool-gray-700 dark:border-warm-gray-200 border-rounded-xl px-6 py-1 outline-none text-center"
    placeholder="What`s your name?"
    bind:value={name}
    on:keydown={handleEnter}
  />
</main>
