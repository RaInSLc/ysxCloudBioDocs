---
# 指定使用默认主题的首页布局
layout: home

hero:
  # 主标题：突出品牌和主要目标用户
  name: "ysxCloudBio"
  text: "为生物学研究加速：高性能生信服务器与定制化服务"
  
  # 口号：精炼地传达核心价值和解决的痛点
  tagline: 
    “从数据到洞察，我们提供安全、稳定、可扩展的计算平台和专业的生物信息学分析支持。”
  
  # 顶部主操作按钮（CTA - Call to Action）
  actions:
    # 品牌主题按钮：引导用户立即开始或了解核心产品
    - theme: brand
      text: 🚀 探索生信云服务器
      link: /products/cloud-server-plans  # 假设这是您的服务器产品页面
    
    # 替换主题按钮：引导用户了解咨询/服务
    - theme: alt
      text: 🔬 查看定制分析服务
      link: /services/custom-analysis    # 假设这是您的定制服务页面

# 核心功能/优势列表：将抽象的 A, B, C 替换为实际的业务优势
features:
  - icon: 💻
    title: 高性能计算集群
    details: 预装主流生物信息学软件，支持大规模并行计算，确保分析任务高效完成。

#  - icon: 🔒
#    title: 数据安全与稳定
#    details: 国际标准数据加密，多重备份机制，为您的敏感研究数据提供企业级安全保障。
  
  - icon: 🧬
    title: 定制化分析流程
    details: 资深生物信息学专家团队，根据您的实验设计定制开发专属数据分析 Pipeline。

  - icon: 💡
    title: 7dx8h 专家技术支持
    details: 无论是服务器运维还是生信问题，技术团队随时待命，快速响应您的需求。

---

## 我们的产品线概览

我们专注于提供两类核心解决方案，帮助您轻松应对高通量测序数据挑战。

<ProductsOverview/>