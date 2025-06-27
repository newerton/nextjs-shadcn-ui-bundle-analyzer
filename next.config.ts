import bundleAnalyzer from '@next/bundle-analyzer';
import { NextConfig } from 'next';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: true,
  openAnalyzer: false,
  analyzerMode: 'static',
});

// Create basePath for GitHub pages
const basePath = process.env.NODE_ENV !== 'development' ? '/nextjs-shadcn-ui-bundle-analyzer' : '';

const nextConfig: NextConfig = {
  output: 'export',
  basePath,
  experimental: {
    reactCompiler: true,
  },
}

module.exports = withBundleAnalyzer(nextConfig)

