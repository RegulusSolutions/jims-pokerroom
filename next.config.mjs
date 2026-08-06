/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'darkgray-stork-483947.hostingersite.com' },
      { protocol: 'https', hostname: 'cornflowerblue-rabbit-756428.hostingersite.com' },
      { protocol: 'https', hostname: 'jimspokerroom.lk' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
  async redirects() {
    return [
      {
        source: '/majestic-pride',
        destination: '/casino-marina',
        permanent: true,
      },
    ];
  },
};
export default nextConfig;
