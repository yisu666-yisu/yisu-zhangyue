# 一粟 · 张悦 — 个人网站

极简、大量留白的个人作品网站，视觉风格参考川内伦子（Rinko Kawauchi）官网，
让摄影作品本身成为主角。已填入你作品集《一粟（张悦）作品集 1.0》中的真实文字与照片。

## 如何预览

最简单的方式：**双击 `index.html`**，会用默认浏览器打开整个网站。

（进阶）在命令行进入本目录后运行 `npx serve`，可得到一个本地网址（如 `http://localhost:3000`），更适合反复调试。

## 文件结构

```
yisu-zhangyue/
├── index.html            首页
├── about.html            关于（身份 / 学术 / 授课 / 证书）
├── works.html            摄影项目总览
├── project-8090.html    《我身边的 80 90 后》详情
├── project-xiongan.html  《雄安 · 人 · 我》详情（三大单元）
├── writing.html          出版物与文章
├── exhibitions.html      展览与荣誉
├── practice.html         跨界实践
├── contact.html          联系
├── css/style.css         全部样式
├── js/main.js            交互脚本
└── assets/images/        全部图片（已压缩优化）
```

## 如何修改内容

- **改文字**：用「记事本」或 VSCode 打开对应的 `.html` 文件，直接改中文即可。
  文字都写在页面上，一目了然。
- **换图片**：把你的新照片放到 `assets/images/` 文件夹，然后在 `.html` 里把对应的
  `src="assets/images/xxx.jpg"` 换成新文件名即可。
- **改配色 / 字体**：打开 `css/style.css`，最顶部的 `:root { ... }` 里定义了
  背景色 `--bg`、文字色 `--ink`、强调色 `--accent` 等，改一个数字全局生效。

## 待你补充的事项

1. **社交平台链接**（`contact.html`）：Instagram / 微博 / 小红书目前是「待补充」占位，
   请替换成你的真实账号地址。
2. **图片可选替换**：当前照片来自你的作品集 PPT，已压缩到适合网页的尺寸。
   若你想用更高清或更替的照片，直接替换 `assets/images/` 里的文件即可（同名替换最省事）。
3. **首页主视觉**：目前用的是「我眼中的诗意雄安」封面（`poetic-cover.jpg`），
   想换的话改 `index.html` 里 hero 那行的图片地址。

## 如何上线（发布到公网）

任选一种，拖拽文件夹即可，无需写代码：

- **Netlify**（推荐）：https://app.netlify.com/drop 直接把整个 `yisu-zhangyue` 文件夹拖进去。
- **Vercel**：https://vercel.com 用 GitHub 导入或直接拖拽。
- **GitHub Pages**：把文件夹上传到 GitHub 仓库，开启 Pages 功能。

上线后绑定你自己的域名即可。

---

© 2026 一粟 · 张悦。All Rights Reserved.
