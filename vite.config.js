import { defineConfig } from 'vite'
Vue.config.devtools = true
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()]
})
