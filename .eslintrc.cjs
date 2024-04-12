module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "prettier",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "@typescript-eslint", "unused-imports", "import"],
  rules: {
    "react-refresh/only-export-components": [
      "error",
      { allowConstantExport: true },
    ],
    "unused-imports/no-unused-imports": "error",
    "import/order": ["error", { "newlines-between": "always" }],
  },
};
