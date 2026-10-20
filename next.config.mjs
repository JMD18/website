// Where the bakeshop site is deployed, e.g. https://bakeshop-xyz.vercel.app (no trailing slash).
// It is its own Next.js app served under /bakeshop ("multi-zones"). Leave unset to turn this off.
const bakeshopUrl = process.env.BAKESHOP_URL?.replace(/\/+$/, "");

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    if (!bakeshopUrl) return [];
    return [
      { source: "/bakeshop", destination: `${bakeshopUrl}/bakeshop` },
      { source: "/bakeshop/:path+", destination: `${bakeshopUrl}/bakeshop/:path+` },
    ];
  },
};

export default nextConfig;
