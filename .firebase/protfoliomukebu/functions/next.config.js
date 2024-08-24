// next.config.js
var path = require("path");
var nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")]
  }
};
module.exports = nextConfig;
