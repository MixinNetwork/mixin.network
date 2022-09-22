
function readNetworkStat() {
  return fetch('https://mixin-api.zeromesh.net/network')
}

export default {
  readNetworkStat
}