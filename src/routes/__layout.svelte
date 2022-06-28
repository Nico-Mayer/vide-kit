<script>
  import "@unocss/reset/tailwind.css"
  import "uno.css"
  import Nav from "../lib/Nav.svelte"
  import { isDark } from "../stores/dark"
  import { themeCheck } from "../lib/composables/darkMode"
  import { onMount } from "svelte"
  onMount(() => {
    // this sets the stor value of isDark on page load
    if (themeCheck()) {
      $isDark = true
    } else {
      $isDark = false
    }
  })
</script>

<main>
  <Nav />
  <div flex="~ col" items="center" p="4">
    <slot />
    <p class="opacity-20 font-italic">[Default Layout]</p>
  </div>
</main>

<style>
  :root {
    background-color: #e7e5e4;
    color: #374151;
  }
  :root.dark {
    background-color: #374151;
    color: #e7e5e4;
  }
</style>
