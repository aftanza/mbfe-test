import { createTheme, px, rem, Text } from "@mantine/core";
import { montserrat } from "./app/_globals/fonts";
import screenWidths from "@/app/styles/export.module.scss";

const regex = /^"|"$/g;

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
    lineHeights: {
        xs: "1.2",
        sm: "1.3",
        md: rem(36),
        lg: "1.5",
        xl: "1.6",
    },
    headings: {
        sizes: {
            h1: {
                fontWeight: "700",
                fontSize: rem(36),
            },
        },
    },
    breakpoints: {
        xs: "30em",
        sm: screenWidths.screenSmall.replace(regex, ""),
        md: screenWidths.screenMedium.replace(regex, ""),
        lg: screenWidths.screenLarge.replace(regex, ""),
        xl: "90em",
    },
    // breakpoints: {
    //     xs: "30em",
    //     sm: "48em",
    //     md: "64em",
    //     lg: "74em",
    //     xl: "90em",
    // },
});
