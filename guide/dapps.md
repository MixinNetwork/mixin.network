# Submit New Applications

list your dapps or bots on [Mixin Ecosystem](https://mixin.network/dapps).

> Please don't submit super group bot or community bot. It's not ready to accept them.

**Prerequisites**

- an icon with size of at 256x256 or 512x512 pixels in PNG format. Please compress your icon at [tinypng](https://tinypng.com/) to reduce the size.
- a JSON-based bot description file to describe your bot. Read the following section for the specification of the JSON file.

**Submit**

- fork this repo.
- create a folder named your bot's id at `/docs/.vuepress/public/dapps/` directory.
  - if your dapps is a Mixin Messenger bot, please use the bot ID which starts with `7000`
  - if your dapps is a [MVM application](https://mvm.dev), please use the contract address on MVM.
- put you the icon and JSON file in the folder and name them as `icon.png` and `index.json`
- modify `index.js` to import your bot
- create a PR to submit your changes

## Bot Description File

The bot description file includes required fields and optional fields.

```json
{
  // the id of your dapps. for bots, please use the bot id, for mvm dapps, please use the contract address
  "id": "7000104159",
  // the client id of your dapps. only useful for bots
  "client_id": "5278fff7-a084-4019-b963-a7a88559d5c4",
  // the url to launch your application
  "launch_url": "https://rings.pando.im",
  // the url to introduce your application
  "intro_url": "https://pando.im/rings",
  // developer information
  "developer": {
    "name": "Pando",
    "url": "https://pando.im"
  },
  // the name of your dapps. right now only 'en', 'zh' and 'ja' are supported
  "name": {
    "en": "Pando Rings"
  },
  // the description of your dapps
  "text": {
    "en": ["An algorithmic, autonomous interest rate protocol. Lend or borrow coins here!"]
  },
  // category
  "category": "financial",
  // supported language
  "languages": ["en", "ja", "zh", "de", "es", "ko"],
  // the mtg members and threshod. only required for MTG applications
  "mtg": {
    "members": [
      "75f18fe8-b056-46d6-9c48-0214425e58ce",
      "e96c26ca-666a-417b-9731-112d48725cca",
      "1265e53d-3642-484c-9f3d-b8616606fd6d",
      "db33b0c9-2e64-4aed-98b4-4d0b1d6a2826",
      "04601cb1-6691-4666-b4d8-720172c3a7d9",
      "d2d4399d-669d-4448-89f6-d65805e62fb7"
    ],
    "threshold": 4
  },
  // the mvm address. only required for MVM applications
  "mvm": {
    "address": "..."
  }
}
```
