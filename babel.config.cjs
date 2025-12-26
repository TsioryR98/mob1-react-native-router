// babel.config.cjs (VERSION CORRIGÉE)

module.exports = function (api) {
  api.cache(true);
  return {
    presets: [["babel-preset-expo", { jsxImportSource: "nativewind" }]],

    plugins: ["nativewind/babel"],
  };
};
