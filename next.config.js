const rehypePrism = require("@mapbox/rehype-prism");
const { rehypeAccessibleEmojis } = require("rehype-accessible-emojis");

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [rehypePrism, rehypeAccessibleEmojis]
  }
});
module.exports = withMDX({
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
});
