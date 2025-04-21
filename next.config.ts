/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/love-isabelle',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
