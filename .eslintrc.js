module.exports = {
  extends: ["plugin:prettier/recommended", "eslint:recommended", "plugin:react/recommended", "nextjs"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "react/react-in-jsx-scope": "off",
  },
  globals: {
    React: "writable",
  },
};
