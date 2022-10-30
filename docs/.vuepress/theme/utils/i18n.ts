import { useThemeLocaleData, useThemeData } from "@vuepress/plugin-theme-data/lib/client";

var defaultMsg = null;

function $t(name, args) {
  const t = useThemeLocaleData();
  const msg = (t.value as any).messages;
  var tpl = '';
  if (Object.prototype.hasOwnProperty.call(msg, name)) {
    tpl = msg[name];
  } else {
    // fallback to english
    if (defaultMsg === null) {
      defaultMsg = (useThemeData().value?.locales['/'] as any).messages;
    }
    if (!Object.prototype.hasOwnProperty.call(defaultMsg, name)) {
      // fallback to the key's name
      return name;
    }
    tpl = defaultMsg[name];
  }
  var ret = tpl;
  if (args) {
    for (const key in args) {
      if (Object.prototype.hasOwnProperty.call(args, key)) {
        const val = args[key];
        const re = new RegExp(`{${key}}`, "g")
        ret = ret.replace(re, val)
      }
    }
  }
  return ret;
}

function getLangBase() {
  const t = useThemeLocaleData();
  const base = (t.value as any).base;
  return base as string;
}

export default {
  $t, getLangBase
}