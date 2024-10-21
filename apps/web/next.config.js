/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ['@amt-web/ui'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io'
      }
    ]
  }
}
