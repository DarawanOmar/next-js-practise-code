/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        domains : ["serpapi.com"]
    },
    experimental : {
        serverActions : true
    }
}

module.exports = nextConfig
