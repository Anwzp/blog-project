import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { TDesignResolver } from '@tdesign-vue-next/auto-import-resolver';
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'pinia',

      ],
      resolvers: [TDesignResolver({
        library: 'vue-next',
      })],
    }),
    AutoImport({
      // 引入你的枚举文件路径
      imports: [
        {
          '/src/types/enums/router.enum.ts': [
            'ParentRouterKey', // 导入常量对象
          ],
        },
      ],
      dts: '/src/auto-imports.d.ts', // 生成类型定义
    }),
    Components({
      resolvers: [TDesignResolver({ library: 'vue-next' })],
    }),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
