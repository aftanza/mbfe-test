/** @type {import('next').NextConfig} */

import path from "path";
const nextConfig = {
    productionBrowserSourceMaps: true,
    sassOptions: {
        includePaths: [path.join(process.cwd(), "app/styles")],
    },
};

export default nextConfig;
