module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/jsx-filename-extension": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "no-undef": "off",
    "react/function-component-definition": "off",
    "arrow-body-style": "off",
    "react/prop-types": "off",
    "no-console": "off",
    "react/no-array-index-key": "off",
  },
};
