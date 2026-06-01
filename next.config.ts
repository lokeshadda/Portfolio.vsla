import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  ...(isGithubActions
    ? {
        output: "export",
        basePath: repoName ? `/${repoName}` : "",
        assetPrefix: repoName ? `/${repoName}/` : "",
        images: { unoptimized: true },
        trailingSlash: true,
      }
    : {}),
};

if (!isGithubActions) {
  nextConfig.headers = async () => [
    {
      source: "/resume/:path*",
      headers: [
        {
          key: "Content-Disposition",
          value: "inline",
        },
      ],
    },
  ];
}

export default nextConfig;