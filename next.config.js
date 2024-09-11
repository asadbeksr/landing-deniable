/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    // basePath: config.base_path !== "/" ? config.base_path : "",
    // trailingSlash: config.site.trailing_slash,
    output: "standalone",
    images: {
      remotePatterns: [
        { protocol: "https", hostname: "test.deniable.io" },
        { protocol: "https", hostname: "deniable.io" },
        { protocol: "https", hostname: "test.app.deniable.io" },
        { protocol: "https", hostname: "app.deniable.io" },
      ],
    },
  };
  
module.exports = nextConfig;
