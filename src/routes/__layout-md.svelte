<script>
  import Nav from "$lib/Nav.svelte"
  import "$lib/styles/oneDark.css"
</script>

<main>
  <Nav />
  <article class="prose mx-auto flex flex-col items-center p4 my-8">
    <slot />
    <p class="opacity-20 font-italic">[Markdown Layout]</p>
  </article>
</main>
