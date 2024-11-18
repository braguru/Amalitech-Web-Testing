/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ['@amt-web/ui'],
  images: {
    domains: ['pexels.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io'
      },
      {
        protocol: 'https',
        hostname: 'pexels.com'
      }
    ]
  }
}
