"use client";

import { Montserrat } from "next/font/google";
import { createTheme, rem, Text } from "@mantine/core";

const montserrat = Montserrat({ subsets: ["latin"] });

export const theme = createTheme({
    components: {},
    fontFamily: montserrat.style.fontFamily,
    fontSizes: {
        xs: rem(10),
        sm: rem(16),
        md: rem(20),
        lg: rem(36),
        xl: rem(100),
    },
    headings: {
        sizes: {
            h1: {
                fontWeight: "700",
                fontSize: rem(36),
            },
        },
    },
});
