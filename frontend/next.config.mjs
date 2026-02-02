/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'loremflickr.com' },
      { protocol: 'https', hostname: 'fastly.picsum.photos' },
      { protocol: 'https', hostname: 'encrypted-tbn3.gstatic.com' },
      { protocol: 'https', hostname: 'cdn.sareeka.com' },
      { protocol: 'https', hostname: 'vipnari.com' },
      { protocol: 'https', hostname: 'pashtush.in' },
      { protocol: 'https', hostname: 'jhakhas.com' },
      { protocol: 'https', hostname: 'wholetex.sgp1.cdn.digitaloceanspaces.com' }
    ],
  },
};

export default nextConfig;
