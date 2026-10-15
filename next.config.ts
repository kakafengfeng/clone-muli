import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 静态导出，用于部署到 GitHub Pages（项目站点子路径）
  output: "export",
  basePath: "/clone-muli",
};

export default nextConfig;
