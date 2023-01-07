import { defineClientConfig, usePageFrontmatter } from '@vuepress/client'
import { onMounted } from 'vue'

import HomeSlogan from './theme/global-components/home/Slogan.vue'
import HomeFeatures from './theme/global-components/home/Features.vue'
import CommSlogan from './theme/global-components/common/Slogan.vue'
import CommSubscribe from './theme/global-components/common/Subscribe.vue'

import HomeStat from './theme/global-components/home/Stat.vue'
import HomeEvents from './theme/global-components/home/Events.vue'
import HomeWallets from './theme/global-components/home/Wallets.vue'
import HomeHlightEntries from './theme/global-components/home/HlightEntries.vue'

import MessengerHero from './theme/global-components/messenger/Hero.vue'
import MessengerFeatures from './theme/global-components/messenger/Features.vue'
import MessengerDownload from './theme/global-components/messenger/Download.vue'

import DappsCollections from './theme/global-components/dapps/Collections.vue'
import DappsList from './theme/global-components/dapps/List.vue'

import DevFeatured from './theme/global-components/dev/Featured.vue'
import DevEntries from './theme/global-components/dev/Entries.vue'
import DevTutorials from './theme/global-components/dev/Tutorials.vue'

import CommunitySlogan from './theme/global-components/community/Slogan.vue'
import CommunityNews from './theme/global-components/community/News.vue'
import CommunityGallery from './theme/global-components/community/Gallery.vue'

import NetworkHero from './theme/global-components/network/Hero.vue'
import NetworkExplorers from './theme/global-components/network/Explorers.vue'
import NetworkNodes from './theme/global-components/network/Nodes.vue'

import ArticleArchive from './theme/global-components/article/Archive.vue';

import Blog from "./theme/layouts/Blog.vue";
import News from "./theme/layouts/News.vue";
import Layout from "./theme/layouts/Layout.vue";

export default defineClientConfig({
  // we provide some blog layouts
  layouts: {
    Blog,
    News,
    Layout,
  },

  enhance({ app, router, siteData }) {
    app.component('home-slogan', HomeSlogan);
    app.component('home-features', HomeFeatures);
    app.component('home-stat', HomeStat);
    app.component('home-events', HomeEvents);
    app.component('home-wallets', HomeWallets);
    app.component('home-hlight-entries', HomeHlightEntries);

    app.component('messenger-hero', MessengerHero);
    app.component('messenger-features', MessengerFeatures);
    app.component('messenger-download', MessengerDownload);

    app.component('dapps-collections', DappsCollections);
    app.component('dapps-list', DappsList);

    app.component('comm-slogan', CommSlogan);
    app.component('comm-subscribe', CommSubscribe);

    app.component('dev-featured', DevFeatured);
    app.component('dev-entries', DevEntries);
    app.component('dev-tutorials', DevTutorials);

    app.component('community-slogan', CommunitySlogan);
    app.component('community-news', CommunityNews);
    app.component('community-gallery', CommunityGallery);

    app.component('network-hero', NetworkHero);
    app.component('network-explorers', NetworkExplorers);
    app.component('network-nodes', NetworkNodes);

    app.component('article-archive', ArticleArchive);
  },
  setup() {
    // onMounted(() => {
    //   const htmlEl = window?.document.querySelector('html');
    //   htmlEl?.classList.remove('dark');
    //   console.log('remove dark mode class manually');
    // });
  },
  rootComponents: [],
})
