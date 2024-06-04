import { createTheme, px, rem, Text } from "@mantine/core";
import { montserrat, workbench } from "./app/_globals/fonts";

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
});
