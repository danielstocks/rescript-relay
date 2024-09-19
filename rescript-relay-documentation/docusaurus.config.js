/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: "RescriptRelay",
  tagline:
    "Production ready, batteries included GraphQL frontend framework for ReScript",
  url: "https://rescript-relay-documentation.vercel.app/",
  baseUrl: "/",
  favicon: "img/favicon.png",
  organizationName: "zth", // Usually your GitHub org/user name.
  projectName: "rescript-relay", // Usually your repo name.
  themeConfig: {
    algolia: {
      appId: "WCPLH7S400",
      apiKey: "ee0c85d6d6a37e46570064a293196cb1",
      indexName: "rescript-relay-umentation",
    },
    prism: {
      magicComments: [
        {
          className: "code-change",
          line: "change-line",
          block: {start: "change", end: "end-change"},
        },
        {
          className: "color1",
          line: "color1",
        },
        {
          className: "color2",
          line: "color2",
        },
        {
          className: "color3",
          line: "color3",
        },
        {
          className: "color4",
          line: "color4",
        },
        {
          className: "color5",
          line: "color5",
        },
      ],
      additionalLanguages: ["rescript"],
    },
    navbar: {
      title: "RescriptRelay",
      items: [
        { to: "docs/start-here", label: "Docs", position: "left" },
        { to: "blog", label: "Blog", position: "left" },
        { to: "showcases", label: "Showcases", position: "left" },
        { to: "community", label: "Community", position: "left" },
        {
          href: "https://github.com/zth/rescript-relay",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Docs",
              to: "docs/start-here",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/wzj4EN8XDc",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
          ],
        },
      ],
      copyright: `Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        googleAnalytics: {
          trackingID: "UA-205541354-1",
          // Optional fields.
          anonymizeIP: true, // Should IPs be anonymized?
        },
      },
    ],
  ],
};
