import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { Vueless, TailwindCSS, UnpluginComponents } from "vueless/plugin-vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),
    Vueless(),
    TailwindCSS(),
    UnpluginComponents(),],
})
