module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "@typescript-eslint/no-explicit-any": "off", // Globally disable no-explicit-any
    "prettier/prettier": "error",
    "react/prop-types": "off",
    "@typescript-eslint/no-unused-vars": "warn",
  },
  overrides: [
    {
      files: ["app/javascripts/**/*.ts", "app/javascripts/**/*.tsx"], // Explicitly target TypeScript files
      rules: {
        "@typescript-eslint/no-explicit-any": "off",
      },
    },
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
};
