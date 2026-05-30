import type { NextConfig } from "next"
import path from "path"

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    unoptimized: true,
  },
  // The site is single-page editorial (CLAUDE.md). Old inner routes for
  // /services and /how-it-works now redirect to home anchors so deep links
  // and search-indexed URLs keep working. /privacy, /terms, /contact remain.
  async redirects() {
    return [
      { source: "/services", destination: "/#services", permanent: true },
      { source: "/how-it-works", destination: "/#how-it-works", permanent: true },
    ]
  },
}

export default nextConfig
