/** @type {import('prettier').Config} */
const tailwindPlugin = require('prettier-plugin-tailwindcss');

const config = {
  plugins: [tailwindPlugin],
  singleQuote: true,
  semi: false,
};

module.exports = config;
