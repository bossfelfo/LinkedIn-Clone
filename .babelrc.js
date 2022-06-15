const plugins = [
  [
    "module-resolver",
    {
      root: ["./src"],
      alias: {
        "@": "./src",
        "@Header": "./src/components/Header/Header",
        "@Login": "./src/components/Login/Login",
        "@Body": "./src/components/Body",
        "@features": "./src/features",
      },
    },
  ],
  [
    "babel-plugin-import",
    {
      libraryName: "@mui/material",
      libraryDirectory: "",
      camel2DashComponentName: false,
    },
    "core",
  ],
  [
    "babel-plugin-import",
    {
      libraryName: "@mui/icons-material",
      libraryDirectory: "",
      camel2DashComponentName: false,
    },
    "icons",
  ],
];

module.exports = { plugins };
