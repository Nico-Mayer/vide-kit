import adapter from "@sveltejs/adapter-auto"
import preprocess from "svelte-preprocess"
import { mdsvex } from "mdsvex"

const config = {
  extensions: [".svelte", ".md"],
  preprocess: [
    preprocess(),
    mdsvex({
      extensions: [".md"],
    }),
  ],
  kit: {
    adapter: adapter(),
  },
}

export default config
