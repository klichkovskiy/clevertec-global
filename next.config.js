/**
 * @type {import('next').NextConfig}
 */

module.exports = {
    experimental: {
        appDir: true,
        serverActions: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
}

