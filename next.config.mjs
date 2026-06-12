/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  outputFileTracingIncludes: {
    '/releases': ['./public/releases/**/*.md'],
  },
};

export default nextConfig;
