import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ysxCloudBio",
  description: "生信服务器和生信服务",
  
  // ⭐️ 添加 base 配置，指向你的仓库名
  base: '/ysxCloudBioDocs/',

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/ysxCloudBioDocs' },
      { text: 'ysxCloudBioDocs', link: '/ysxCloudBioDocs' }
    ],

    sidebar: [
      {
        text: 'ysxCloudBioDocs',
        items: [
          { text: 'ysxCloudBioDocs', link: '/ysxCloudBioDocs' }
          
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
