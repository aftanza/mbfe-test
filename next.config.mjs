/** @type {import('next').NextConfig} */

import path from "path";
const nextConfig = {
    productionBrowserSourceMaps: true,
    sassOptions: {
        includePaths: [path.join(process.cwd(), "app/styles")],
    },
    output: "standalone",
    async redirects() {
        return [
            // Basic redirect
            {
                source: "/",
                destination: "/home",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
