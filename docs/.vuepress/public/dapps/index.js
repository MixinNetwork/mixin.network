const dapps = import.meta.globEager('./*/*.json', { eager: true })

function getdApps(lang) {
  lang = lang || 'en'

  const ret = [];

  for (const key in dapps) {
    if (Object.hasOwnProperty.call(dapps, key)) {
      const dapp = dapps[key];
      let lc_name = dapp.name[lang] || dapp.name['en'] || 'Unnamed'
      let lc_text = dapp.text[lang] || dapp.text['en'] || 'dApp description'
      ret.push(Object.assign({ lc_name, lc_text }, dapp));
    }
  }

  ret.sort((a, b) => {
    if (a.lc_name > b.lc_name) {
      return 1;
    }
    return -1;
  })

  return ret;
}

export default getdApps;