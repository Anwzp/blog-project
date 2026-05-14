# Vue3 + SpringBoot 博客系统技术方案与技术实现路线

# 一、项目定位

本项目为：

```text
个人技术博客 + Markdown 内容平台 + 管理后台
```

目标：

- 支持 Markdown / MDX 博客写作
- 支持分类 / 标签 / 搜索
- 支持后台文章管理
- 支持评论系统
- 支持 SEO
- 支持暗黑模式
- 支持文件上传
- 支持全文搜索
- 后续支持 AI 能力扩展

---

# 二、整体技术架构

```text
┌──────────────────────────┐
│        Vue3 前端         │
│  博客站点 + 后台管理系统  │
└────────────┬─────────────┘
             │ HTTPS
┌────────────▼─────────────┐
│     Spring Boot API      │
│         Java 后端         │
└───────┬────────┬─────────┘
        │        │
        ▼        ▼
     MySQL     Redis
        │
        ▼
      MinIO
        │
        ▼
 Elasticsearch（全文搜索）
```

---

# 三、前端技术方案（Vue）

# 1. 技术栈

| 模块 | 技术 |
|---|---|
| 框架 | Vue3 |
| 构建工具 | Vite |
| 开发语言 | TypeScript |
| 路由 | Vue Router 4 |
| 状态管理 | Pinia |
| CSS方案 | TailwindCSS |
| UI组件库 | Element Plus |
| Markdown渲染 | markdown-it |
| 代码高亮 | Shiki |
| 搜索 | Fuse.js |
| SEO | @vueuse/head |
| 评论系统 | Giscus |
| 动画 | Motion |
| 图标 | Iconify |

---

# 2. 前端目录结构

```text
src/
├── api/
├── assets/
├── components/
│   ├── common/
│   ├── layout/
│   ├── article/
│   └── ui/
├── composables/
├── constants/
├── hooks/
├── layouts/
├── pages/
│   ├── home/
│   ├── article/
│   ├── category/
│   ├── tag/
│   ├── archive/
│   ├── project/
│   ├── about/
│   └── admin/
├── router/
├── stores/
├── styles/
├── types/
├── utils/
├── App.vue
└── main.ts
```

---

# 3. 前端页面规划

# 用户端页面

```text
首页
博客列表页
文章详情页
标签页
分类页
归档页
项目页
关于页
搜索页
404 页面
```

---

# 管理后台页面

```text
登录页
仪表盘
文章管理
分类管理
标签管理
评论管理
用户管理
系统设置
```

---

# 四、后端技术方案（Java）

# 1. 技术栈

| 模块 | 技术 |
|---|---|
| 主框架 | Spring Boot 3 |
| Web框架 | Spring MVC |
| ORM | MyBatis Plus |
| 权限认证 | Spring Security |
| Token | JWT |
| 数据库 | MySQL 8 |
| 缓存 | Redis |
| 文件存储 | MinIO |
| 搜索 | Elasticsearch |
| API文档 | SpringDoc OpenAPI |
| 部署 | Docker |

---

# 2. 后端目录结构

```text
blog-server/
├── common/
├── config/
├── framework/
├── modules/
│   ├── auth/
│   ├── user/
│   ├── article/
│   ├── category/
│   ├── tag/
│   ├── comment/
│   ├── upload/
│   ├── search/
│   └── dashboard/
├── utils/
├── resources/
└── application.yml
```

---

# 五、数据库设计

# 1. 用户表

```sql
CREATE TABLE user (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(50),
  password VARCHAR(255),
  nickname VARCHAR(50),
  avatar VARCHAR(255),
  role VARCHAR(20),
  create_time DATETIME
);
```

---

# 2. 文章表

```sql
CREATE TABLE article (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255),
  summary VARCHAR(500),
  content LONGTEXT,
  cover VARCHAR(255),
  category_id BIGINT,
  view_count INT,
  like_count INT,
  status TINYINT,
  create_time DATETIME
);
```

---

# 3. 标签表

```sql
CREATE TABLE tag (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50)
);
```

---

# 4. 评论表

```sql
CREATE TABLE comment (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  article_id BIGINT,
  user_id BIGINT,
  content TEXT,
  parent_id BIGINT,
  create_time DATETIME
);
```

---

# 六、核心功能模块设计

# 1. Markdown 博客系统

支持：

- Markdown
- 代码高亮
- 图片上传
- Mermaid
- TOC 目录
- 数学公式

推荐：

```text
markdown-it + Shiki
```

---

# 2. 搜索系统

技术：

```text
Elasticsearch + IK 分词器
```

支持：

- 标题搜索
- 标签搜索
- 全文搜索
- 模糊搜索

---

# 3. 登录权限系统

方案：

```text
Spring Security + JWT
```

权限模型：

```text
RBAC
```

角色：

```text
admin
editor
visitor
```

---

# 4. 文件上传系统

推荐：

```text
MinIO
```

支持：

- Markdown 图片
- 封面上传
- 用户头像

---

# 5. SEO 系统

前端：

```text
@vueuse/head
```

支持：

- title
- meta
- sitemap
- robots
- RSS

---

# 七、API 设计规范

# RESTful API

## 文章接口

```http
GET    /api/article/list
GET    /api/article/{id}
POST   /api/article
PUT    /api/article/{id}
DELETE /api/article/{id}
```

---

## 分类接口

```http
GET /api/category/list
POST /api/category
```

---

## 标签接口

```http
GET /api/tag/list
POST /api/tag
```

---

## 登录接口

```http
POST /api/auth/login
POST /api/auth/logout
GET  /api/auth/info
```

---

## 上传接口

```http
POST /api/upload/image
```

---

# 八、项目 UI 设计规范

# 设计风格

```text
极简技术风
白色背景
蓝色强调色
圆角卡片
弱阴影
大量留白
```

---

# 主题系统

支持：

```text
light
dark
system
```

---

# 字体规范

```text
标题：32~48px
正文：16px
辅助文字：14px
```

---

# 九、Docker 部署方案

# Docker Compose 架构

```text
Nginx
Vue Frontend
SpringBoot
MySQL
Redis
MinIO
Elasticsearch
```

---

# Docker Compose 示例

```yaml
version: '3'

services:
  mysql:
    image: mysql:8

  redis:
    image: redis:7

  minio:
    image: minio/minio

  elasticsearch:
    image: elasticsearch:8
```

---

# 十、技术实现路线（重点）

# 第一阶段：项目初始化（第 1 周）

# 前端

完成：

- Vue3 初始化
- Vite 初始化
- TypeScript 配置
- TailwindCSS 配置
- Vue Router 配置
- Pinia 配置
- Layout 基础布局

目标：

```text
完成博客基础页面框架
```

---

# 后端

完成：

- SpringBoot 初始化
- MySQL 连接
- Redis 配置
- MyBatis Plus 配置
- Swagger 配置

目标：

```text
完成基础 API 环境
```

---

# 第二阶段：文章系统（第 2~3 周）

# 前端

完成：

- 首页
- 博客列表页
- 文章详情页
- Markdown 渲染
- 代码高亮
- 标签页
- 分类页

---

# 后端

完成：

- 文章 CRUD
- 分类 CRUD
- 标签 CRUD
- Markdown 存储
- 文件上传

目标：

```text
完成博客核心功能
```

---

# 第三阶段：后台系统（第 4~5 周）

# 前端

完成：

- 登录页
- Dashboard
- 文章管理
- 评论管理
- 系统设置

---

# 后端

完成：

- JWT 登录
- Spring Security
- 权限控制
- 评论系统

目标：

```text
完成后台管理系统
```

---

# 第四阶段：高级功能（第 6~7 周）

完成：

- 全文搜索
- SEO
- RSS
- Sitemap
- 暗黑模式
- 页面动画
- 性能优化

目标：

```text
达到生产级博客标准
```

---

# 第五阶段：部署上线（第 8 周）

完成：

- Docker 化
- Linux 部署
- Nginx 配置
- HTTPS
- 域名解析
- CI/CD

目标：

```text
正式上线博客系统
```

---

# 十一、推荐学习路线

# Vue 学习路线

```text
Vue3
→ Composition API
→ Pinia
→ Vue Router
→ TypeScript
→ TailwindCSS
→ 工程化
→ 性能优化
```

---

# Java 学习路线

```text
SpringBoot
→ REST API
→ MyBatis Plus
→ JWT
→ Spring Security
→ Redis
→ Elasticsearch
→ Docker
→ Linux
```

---

# 十二、推荐开发模式

# MVP 开发模式

第一版只做：

```text
登录
发文章
Markdown
评论
搜索
管理后台
```

上线后再扩展：

```text
AI 功能
推荐系统
实时通知
在线编辑
数据分析
```

---

# 十三、最终推荐技术栈（最佳实践）

# 前端

```text
Vue3
TypeScript
Vite
Pinia
Vue Router
TailwindCSS
Element Plus
Markdown-it
Shiki
```

---

# 后端

```text
Java 21
Spring Boot 3
Spring Security
JWT
MyBatis Plus
MySQL 8
Redis
MinIO
Elasticsearch
Docker
```

---

# 十四、项目最终价值

完成后你将获得：

- 一个完整的个人博客平台
- 一个完整前后端分离项目
- 一个可上线生产项目
- 一个中高级全栈项目案例
- 一个长期可持续迭代的平台

该项目可用于：

```text
技术博客
简历项目
面试项目
个人品牌建设
技术分享平台
全栈能力展示
```

