/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['lucide-react'],
  images: {
    remotePatterns: [
      {
        hostname: 'dev-cdn.keywae.com',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/v1/:path*',
        destination: 'https://dev-api.keywae.com/helpcare/v1/:path*',
      },
    ];
  },
};

export default nextConfig;
