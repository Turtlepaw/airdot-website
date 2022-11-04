function MultipleLinks(destination, ...sources) {
  return sources.map(e => ({
    source: e,
    destination,
    permanent: true
  }))
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  async redirects() {
    return [
      ...MultipleLinks("https://discord.gg/Rgxv5M6sq9", "/discord", "/server", "/support"),
    ]
  }
}

module.exports = nextConfig
