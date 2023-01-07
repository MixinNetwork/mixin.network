import { CustomTheme } from './theme'
import { themeDataPlugin } from '@vuepress/plugin-theme-data'
import { sitemapPlugin } from "vuepress-plugin-sitemap2"
import { seoPlugin } from "vuepress-plugin-seo2";
import { genLocales } from "./config/locales";
import { blogPlugin } from "vuepress-plugin-blog2";
import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from '@vuepress/cli'
import { addViteSsrNoExternal } from 'vuepress-shared';
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { feedPlugin } from "vuepress-plugin-feed2";

module.exports = {
  title: "Mixin Network",

  head: [
    ['meta', {name: 'color-scheme', content: 'light only'}],
    ['link', { type: 'image/icon', rel: 'icon', href: '/favicon.ico' }],
    ['link', {rel: 'canonical', href: '/'}],
    ['link', {rel: 'me', href: 'https://twitter.com/mixin_network'}],
    ['link', {rel: 'stylesheet', href: '/scripts/tailwind.min.css'}],
  ],
  locales: {
    '/': {
      lang: 'en-US',
    },
    '/zh/': {
      lang: 'zh-TW',
    },
    '/ja/': {
      lang: 'ja-JP',
    },
  },

  theme: CustomTheme({
  }),

  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),

  extendsBundlerOptions: (config, app) => {
    addViteSsrNoExternal ({ app, config }, 'vuepress-shared');
  },

  plugins: [
    feedPlugin({
      hostname: "https://mixin.network",
      atom: true,
      filter: ({ frontmatter, filePathRelative }) => {
        if (filePathRelative === null) {
          return false;
        }
        const path = filePathRelative as string
        if (path.startsWith("blog/") || path.startsWith("news/")) {
          if (path.endsWith("archive.md") || path === "essays/README.md" || path === "news/README.md") {
            return false;
          }
          return true;
        }
        return false;
      },
      sorter: (pageA, pageB) => {
        return new Date(pageB.frontmatter.date as Date).getTime() -
        new Date(pageA.frontmatter.date as Date).getTime()
      },
    }),
    seoPlugin({
      hostname: "mixin.network",
      canonical: "https://mixin.network",
      isArticle: (page) => {
        return Boolean(page.frontmatter.article !== false);
      },
      ogp: (ogp, page) => ({
        ...ogp,
        "og:image": page.frontmatter.banner || "https://mixin.network/images/default-article-cover.png" || ogp["og:image"],
        "twitter:card": "summary_large_image",
        "twitter:site": "@mixin_network",
        "twitter:creator": "@mixin_network",
        "twitter:title": page.frontmatter.title,
        "twitter:description": page.frontmatter.description,
        "twitter:image": page.frontmatter.banner || "https://mixin.network/images/default-article-cover.png" || ogp["twitter:card"],
        "twitter:image:alt": page.frontmatter.title || "https://mixin.network/images/default-article-cover.png" || ogp["twitter:card"],
      })
    }),
    blogPlugin({
      // only files under posts are articles
      filter: ({ filePathRelative }) =>
      filePathRelative ? filePathRelative.startsWith("blog/") || filePathRelative.startsWith("news/") : false,

      // getting article info
      getInfo: ({ frontmatter, title, data }) => ({
        title,
        author: frontmatter.author || "",
        date: frontmatter.date || null,
        category: frontmatter.category || [],
        tag: frontmatter.tag || [],
        excerpt:
          // support manually set excerpt through frontmatter
          typeof frontmatter.excerpt === "string"
            ? frontmatter.excerpt
            : data?.excerpt || "",
        cover: (() => {
          const c = frontmatter.cover || "";
          if ((c as string).length < 8) {
            return "https://mixin.network/images/default-article-cover.png";
          }
          return c;
        })(),
      }),

      // generate excerpt for all pages excerpt those users choose to disable
      excerptFilter: ({ frontmatter }) =>
        !frontmatter["home"] &&
        frontmatter["excerpt"] !== false &&
        typeof frontmatter["excerpt"] !== "string",

      category: [
       {
          key: "category",
          getter: (page) => <string[]>page.frontmatter.category || [],
          layout: "Category",
          itemLayout: "Category",
          frontmatter: () => ({ title: "Categories", sidebar: false }),
          itemFrontmatter: (name) => ({
            title: `Category ${name}`,
            sidebar: false,
          }),
        },
        {
          key: "tag",
          getter: (page) => <string[]>page.frontmatter.tag || [],
          layout: "Tag",
          itemLayout: "Tag",
          frontmatter: () => ({ title: "Tags", sidebar: false }),
          itemFrontmatter: (name) => ({
            title: `Tag ${name}`,
            sidebar: false,
          }),
        },
      ],

      type: [
        {
          key: "blog",
          // only article with date should be added to timeline
          filter: (page) => {
            return (page.frontmatter.date instanceof Date) && (page.pathInferred as string).startsWith("/blog/")
          },          // sort pages with time
          sorter: (pageA, pageB) => {
            return new Date(pageB.frontmatter.date as Date).getTime() - new Date(pageA.frontmatter.date as Date).getTime();
          },
          path: "/blog/",
          layout: "Blog",
          frontmatter: () => ({ title: "Blog", sidebar: false }),
        },
        {
          key: "news",
          // only article with date should be added to timeline
          filter: (page) => {
            return (page.frontmatter.date instanceof Date) && (page.pathInferred as string).startsWith("/news/")
          },
          // sort pages with time
          sorter: (pageA, pageB) =>
            new Date(pageB.frontmatter.date as Date).getTime() -
            new Date(pageA.frontmatter.date as Date).getTime(),
          path: "/news/",
          layout: "News",
          frontmatter: () => ({ title: "News", sidebar: false }),
        },
      ],
      hotReload: true,
    }),
    googleAnalyticsPlugin({
      id: 'G-FS1WRK9J9S',
    }),
    sitemapPlugin({
      hostname: 'mixin.network'
    }),
    themeDataPlugin({

      logo: "/images/logo.svg",

      colorModeSwitch: true,

      colorMode: 'light',

      themeData: {
        contributors: false,

        lastUpdatedText: "Updated at",

        locales: genLocales(),

        social: [
          {
            name: 'twitter',
            url: 'https://twitter.com/mixin_network'
          },
          {
            name: 'reddit',
            url: 'https://www.reddit.com/r/mixin/'
          },
          {
            name: 'github',
            url: 'https://github.com/MixinNetwork'
          },
          {
            name: 'stackoverflow',
            url: 'https://stackoverflow.com/questions/tagged/mixin'
          },
        ]
      },
    }),
  ]
}