module.exports = {
  root: true,
  env: {browser: true, es2020: true},
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "prettier"
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: {ecmaVersion: "latest", sourceType: "module"},
  settings: {react: {version: "18.2"}},
  plugins: ["react-refresh", "prettier", "import"],
  rules: {
    "react/prop-types": "off",
    "react/jsx-no-target-blank": "off",
    "react-refresh/only-export-components": [
      "warn",
      {allowConstantExport: true}
    ],
    "prettier/prettier": [
      "warn",
      {
        arrowParens: "avoid",
        bracketSameLine: true,
        printWidth: 80,
        semi: true,
        singleQuote: false,
        tabWidth: 2,
        trailingComma: "none",
        useTabs: false
      }
    ],
    "import/order": [
      "warn",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index"
        ],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true
        }
      }
    ]
  }
};
