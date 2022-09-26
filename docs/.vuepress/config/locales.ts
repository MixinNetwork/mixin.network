// const { enUS, zhTW } = require("../theme/lang");

// export default {
//   '/': {
//     selectLanguageName: 'English',

//     selectLanguageText: 'English',

//     logo: "/images/logo.svg",

//     messages: enUS,

//     navbar: [
//       { text: 'Ecosystem', link: '/dapps' },
//       { text: 'Developers', link: '/developers' },
//       { text: 'Network', link: '/network' },
//       { text: 'Messenger', link: '/messenger' },
//       { text: 'Community', link: '/community' },
//       { text: 'Blog', link: '/blog' },
//     ],
//   },
//   '/zh/': {
//     selectLanguageName: '中文',

//     selectLanguageText: '中文',

//     logo: "/images/logo.svg",

//     messages: zhTW,

//     navbar: [
//       { text: '生態系統', link: '/zh/dapps' },
//       { text: '開發者', link: '/zh/developers' },
//       { text: 'Network', link: '/zh/network' },
//       { text: 'Messenger', link: '/zh/messenger' },
//       { text: '社區', link: '/zh/community' },
//       { text: '部落格', link: '/blog' },
//     ],
//   },
// }


const { enUS, zhTW, jaJP } = require("../theme/lang");

export function genLocales() {
  const locales = [
    { name: 'English', messages: enUS, base: '/' },
    { name: '中文', messages: zhTW, base: '/zh/' },
    { name: '日本語', messages: jaJP, base: '/ja/' },
  ];

  const ret:any = {};
  for (let ix = 0; ix < locales.length; ix++) {
    const locale = locales[ix];
    ret[locale.base] = {
      selectLanguageName: locale.name,

      selectLanguageText: locale.name,

      logo: "/images/logo.svg",

      messages: locale.messages,

      navbar: [
        { text: locale.messages['nav.ecosystem'], link: `${locale.base}ecosystem` },
        { text: locale.messages['nav.developers'], link: `${locale.base}/developers` },
        { text: locale.messages['nav.network'], link: `${locale.base}/network` },
        { text: locale.messages['nav.messenger'], link: `${locale.base}/messenger` },
        { text: locale.messages['nav.community'], link: `${locale.base}community` },
        { text: locale.messages['nav.blog'], link: `${locale.base}blog` },
      ],
    };
  }
  return ret;
}