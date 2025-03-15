// next.config.mjs
const isProd = process.env.NODE_ENV === 'production';
const repoName = '/ai-flow-presentation';

const nextConfig = {
  /* config options here */
  // Configuration for static export
  output: 'export',
  // Disable image optimization for static export
  images: {
    unoptimized: true,
    remotePatterns: [],
  },
  // Add base path if deploying to a custom subdomain (e.g., username.github.io/repo-name)
  basePath: isProd ? repoName : '',
  // Ensure assets are correctly referenced
  assetPrefix: isProd ? repoName + '/' : '',
  // Disable ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Properly set the public runtime configurations for handling asset paths
  publicRuntimeConfig: {
    basePath: isProd ? repoName : '',
  },
};

export default nextConfig;
