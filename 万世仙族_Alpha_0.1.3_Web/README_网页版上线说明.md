# 万世仙族 Alpha 0.1.3 网页试玩包

本包从最新 Alpha 0.1.3 工程的浏览器版本整理，沿用现有共享模拟核心、完整人物头像、山门、云州地图、通知、族谱、存档和三首 BGM。只调整网页版标识，关闭开发调试入口，并加入静态文件更新缓存配置；未改变核心数值、玩法或存档结构。

这是浏览器 HTML/CSS 界面版本，可由静态网站托管直接提供试玩。并非通过 Cocos Creator 编辑器导出的 Web Mobile 构建。

## 免费发布：Cloudflare Pages

无需购买独立域名，无需自己租服务器。可使用 Cloudflare Pages 免费计划及平台提供的 `项目名.pages.dev` 地址。平台额度和政策以官方说明为准。

1. 打开 https://dash.cloudflare.com/ ，注册或登录自己的账号。
2. 进入 Workers & Pages，创建 Pages 项目，选择直接上传（Direct Upload / Drag and drop）。如果界面首先显示 Workers，请找到 Pages 入口。
3. 项目名使用英文，例如 `wanshi-xianzu-demo`。直接上传 `万世仙族_Alpha_0.1.3_Web.zip`；如果页面只接受目录，则解压后上传包含 `index.html` 的目录。
4. 点击部署（Deploy site / Save and Deploy）。本包已经是静态网站成品，不需要 npm install、构建命令、Cocos 编辑器或服务器后端。
5. 部署完成后，复制平台实际提供的 HTTPS 地址给朋友。这里的项目名仅为示例，本交付尚未部署到公网。

ZIP 根目录就是 `index.html`，没有额外工程外壳目录。请上传整个包，保留 `art/`、`portraits/`、`icons/`、`audio/` 目录及其相对路径。

官方上传说明：https://developers.cloudflare.com/pages/get-started/direct-upload/
官方免费额度：https://developers.cloudflare.com/pages/platform/limits/
官方说明支持网页控制台直接上传 ZIP；直接上传限制为 1,000 个文件、单个文件 25 MiB。本包已检查处于该范围内。

## 试玩与存档

- 手机或电脑使用浏览器访问部署后的 HTTPS 地址，即可进入标题页。
- BGM 默认保持工程原来的设置；如无音乐，点击设置，开启 BGM，再选择低/中/高音量。三首真实 MP3 已包含在 `audio/` 中。浏览器需要用户点击后才允许播放声音。
- 各玩家的存档保存在自己的浏览器中，不是多人服务器，也没有云存档同步。请保留导出的存档 JSON 备份。
- 更换浏览器、手机、网址，或者清除网站数据，都可能无法继续原来的本地存档。更新游戏时建议继续使用同一 Pages 项目和固定正式网址。
- 从 Cocos/原生客户端到网页不会自动搬迁原存档。
- 关闭标签页前可手动保存。通知、弹窗、设置和暂停流程保持现有实现。

## 本机查看（可选）

解压本包，进入含 `index.html` 的目录。电脑已经安装 Python 3 时，可运行：

```sh
python -m http.server 8000 --bind 127.0.0.1
```

然后访问 http://127.0.0.1:8000/ 。关闭终端即停止服务。不要把双击 `index.html` 的 file:// 方式作为正式试玩方式；正式分享请用 HTTPS 托管地址。

## 验证范围

已执行：JavaScript 语法检查、共享核心标题/开局/保存/返回标题 smoke test、静态资源 HTTP 加载检查、与原工程资源字节一致性检查、ZIP 完整性检查。

Real browser/device validation: NOT EXECUTED
Real Cocos validation: NOT EXECUTED
Public deployment validation: NOT EXECUTED
Long balance simulation: NOT EXECUTED

本轮只整理网页版交付，不安装依赖，不重新跑长期模拟。
