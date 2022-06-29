<script>
  import Nav from "../lib/Nav.svelte"
  import drakula from "../lib/styles/oneDark.css"
</script>

<main class="overflow-x-hidden">
  <Nav />
  <article
    class="prose mx-auto flex flex-col items-center p4 my-8"
    style={"../lib/styles/lightcode.css"}
  >
    <slot />
    <p class="opacity-20 font-italic">[Markdown Layout]</p>
  </article>
</main>
