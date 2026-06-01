import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const basePath = isGithubActions && repoName ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  ...(isGithubActions
    ? {
        output: "export",
        basePath,
        assetPrefix: basePath ? `${basePath}/` : "",
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