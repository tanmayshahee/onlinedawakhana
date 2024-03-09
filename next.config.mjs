/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.toothsi.in',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
