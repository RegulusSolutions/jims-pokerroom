/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Images are still served from the old WordPress host so the site works
    // out of the box. Move them into /public/images before going live.
    remotePatterns: [
      { protocol: 'https', hostname: 'darkgray-stork-483947.hostingersite.com' },
      { protocol: 'https', hostname: 'cornflowerblue-rabbit-756428.hostingersite.com' },
      { protocol: 'https', hostname: 'jimspokerroom.lk' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
};
export default nextConfig;
