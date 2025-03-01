// next.config.mjs
const nextConfig = {
  /* config options here */
  // Configuration for static export
  output: 'export',
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  // Add base path if deploying to a custom subdomain (e.g., username.github.io/repo-name)
  basePath: process.env.NODE_ENV === 'production' ? '/Live-Software' : '',
  // Ensure assets are correctly referenced
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Live-Software/' : '',
  // Disable ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
