import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetUno,
  extractorSvelte,
  presetIcons,
} from "unocss"

export default defineConfig({
  extractors: [extractorSvelte],
  shortcuts: [
    ["icon-btn", "text-24px hover:opacity-50 transition-all duration-200 "],
    [
      "btn",
      "bg-red-500/90 hover:bg-red-500 px4 py1 rounded text-warmgray-200 hover:shadow transition-all duration-200",
    ],
  ],
  presets: [
    presetUno(),
    presetAttributify({
      /* options */
    }),
    presetIcons({
      /* options */
    }),
    presetTypography(),
  ],
})
