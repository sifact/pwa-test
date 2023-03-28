/** @type {import('next').NextConfig} */
// const nextConfig = withPWA({
//     reactStrictMode: true,
//     pwa: {
//         dest: "public",
//         register: true,
//         skipWaiting: true,
//         disable: process.env.NODE_ENV === "development",
//     },
// });

// module.exports = nextConfig;

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        removeConsole: process.env.NODE_ENV !== "development",
    },
};

const withPWA = require("next-pwa")({
    dest: "public",
    disable: process.env.NODE_ENV === "development",
    register: true,
});

module.exports = withPWA(nextConfig);
