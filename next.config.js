/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'xhzcrshkgefgsatjhabk.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/images/*',
      },
    ],
  },
}

module.exports = nextConfig
