/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, 
  swcMinify: true,
  images:{

             formats:['image/avif','image/webp'],
             domains:['jacekjeznach.com',"https://formsubmit.co/"]

         }
}

module.exports = nextConfig
