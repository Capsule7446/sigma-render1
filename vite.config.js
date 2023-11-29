import { defineConfig } from 'vite'
import { resolve } from 'path'
export default defineConfig({
  plugins: [],
  build: {
    lib: {
      // eslint-disable-next-line no-undef
      entry: resolve(__dirname, './src/index.ts'), // 设置入口文件【这里也可以直接引用插件.vue根组件】
      name: 'render', // 起个名字，安装、引入用
      fileName: (format) => `render.${format}.js`, // 打包后的文件名【可以自定义】
      formats: ['umd']
    },
    sourcemap: false, // 输出.map文件
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
          helloword: 'helloword'   // 这里暴露出去一个全局变量
        }
      }
    }
  }
})
