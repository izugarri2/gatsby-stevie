module.exports = {
  siteMetadata: {
    siteUrl: "https://bobmcc.dev",
    title: "bobmcc",
  },
  plugins: [
    {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [`gatsby-remark-responsive-iframe`],
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-react-svg",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              elements: ["h1"],
            },
          },
        ],
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-plugin-theme-ui`,
      options: {
        preset: "@theme-ui/preset-deep",
      },
    },
  ],
};
