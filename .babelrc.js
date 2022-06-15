const plugins = [
  [
    "module-resolver",
    {
      root: ["./src"],
      alias: {
        "@": "./src",
        "@Header": "./src/components/Header/Header",
        "@Login": "./src/components/Login/Login",
        "@Body": "./src/components/Body/index.js",
        "@features": "./src/features/",
        "@firebase": "./src/firebase",
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
