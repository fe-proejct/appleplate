import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';

// import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }: {
  mode: string
}) => {
  const mdx = await import('@mdx-js/rollup');
  const env = loadEnv(mode, process.cwd())

  return {
    optimizeDeps: {
      include: ['react/jsx-runtime'],
    },
    plugins: [
      react(),
      mdx.default({ remarkPlugins: [] }),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            title: env.VITE_KAKAO_API,
          }
        }
      }),

    ],
  };
});
