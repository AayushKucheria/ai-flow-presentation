/**
 * Utility function to get the correct image path with basePath consideration
 * This handles the GitHub Pages deployment where we need to prefix paths with the repository name
 */
export function getImagePath(path: string): string {
  // For static builds on GitHub Pages, we need to include the repository name
  const isProd = process.env.NODE_ENV === 'production';
  const basePath = isProd ? '/ai-flow-presentation' : '';
  
  // Ensure path starts with a slash
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // Combine basePath and normalizedPath
  return `${basePath}${normalizedPath}`;
} 