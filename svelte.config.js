import adapter from "@sveltejs/adapter-auto"
import preprocess from "svelte-preprocess"
import Unocss from "unocss/vite"
import { mdsvex } from "mdsvex"

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ".md"],
  preprocess: [
    preprocess(),
    mdsvex({
      extensions: [".md"],
    }),
  ],

  kit: {
    vite: {
      plugins: [Unocss()],
    },
    adapter: adapter(),
  },
}

export default config
