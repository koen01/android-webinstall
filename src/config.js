export default {
    OS_NAME: process.env.VUE_APP_OS_NAME,
    ACCENT_COLOR: "#0366d6",
    SUPPORTED_DEVICES: [
        {
            name: "Pixel 3",
            model: "blueline",
        },
        {
            name: "Pixel 3 XL",
            model: "crosshatch",
        },
        {
            name: "Pixel 4a",
            model: "sunfish",
        },
        {
            name: "Pixel 4",
            model: "flame",
        },
        {
            name: "Pixel 4 XL",
            model: "coral",
        },
        {
            name: "Pixel 6",
            model: "oriole",
        },
        {
            name: "Pixel 6 Pro",
            model: "raven",
        },
    ],
    RELEASE_VARIANTS: {
        gapps: {
            description:
                "Version with Google services included, so the apps you’re familiar with will work. Recommended for most users.",
            suffix: " with Google services",
        },
        beta: {
            description: "Beta version for testing only.",
            suffix: "beta",
        },
    },
};
