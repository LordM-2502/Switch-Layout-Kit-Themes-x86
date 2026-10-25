require("dotenv").config();
const ICONS_DIR = "build/icons/";

const windowsOS = {
    win: {
        icon: ICONS_DIR + "icon.ico",
        target: [
            {
                target: "nsis",
                arch: ["ia32"],
            },
        ],
    },

    nsis: {
        differentialPackage: true,
        perMachine: true,
        oneClick: false,
        allowToChangeInstallationDirectory: true,
    },
};

module.exports = {
    productName: "LayoutKit",
    appId: "net.themezer.layoutkit",
    artifactName: "setup-${version}.${ext}",
    directories: {
        output: "build",
    },
    publish: {
        provider: "github",
        token: process.env.GITHUB_ACCESS_TOKEN
    },
    files: [
        "package.json",
        "dist/**/*",
        "node_modules/**/*",
    ],
    ...windowsOS,
};
