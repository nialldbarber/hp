import {vanillaExtractPlugin} from '@vanilla-extract/vite-plugin'
import react from '@vitejs/plugin-react'
import {defineConfig} from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    react(),
    vanillaExtractPlugin(),
    tsconfigPaths(),
  ],
})
