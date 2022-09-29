
# Submit new dApp

> Please don't submit super group bot or community bot

**Prerequisites**

- an icon with size of at 256x256 pixels in PNG format. Please compress your icon at [tinypng](https://tinypng.com/) to reduce the size.
- a JSON-based bot description file to describe your bot. Read the following section for the specification of the JSON file.

**Submit**

- fork this repo.
- create a folder named your bot's id at `/docs/.vuepress/public/dapps/` directory
- put you the icon and JSON file in the folder and name them as `icon.png` and `index.json`
- create a PR to submit your changes

**dApp Description File**

The bot description file includes required fields and optional fields.

```json
{
  // the unique id of the dapp
  // you can use the mixin_id or the contract address.
  "id": "7000101001",
  // the url to launch the dapp
  "launch_url": "https://app....",
  // the url to introduce the dapp
  "intro_url": "https://www....",
  "developer": {
    "name": "Pando",
    "url": "https://www..."
  },
  // dapp's name, support mulitple languages: en, es, ja, zh, ko, de
  "name": {
    "en": "4swap"
  },
  // description, up to 3 lines for each langauge
  "text": {
    "en": [
      "A decentralized swapping protocol on Mixin Network, with best liquidity."
    ]
  },
  // please specify the category of the dapp
  "category": "exchange",
  // supported languages
  "languages": ["en", "ja", "zh", "de", "es", "ko"],

  // optional fields.
  // the mixin bot id of the dapp. omit it if the dapp has no bot.
  "mixin_id": "7000103537",
  // the mixin bot client id of the dapp. omit it if the dapp has no bot.
  "client_id": "a753e0eb-3010-4c4a-a7b2-a7bda4063f62",
  // mtg information. omit it if the dapp is not a MTG application
  "mtg": {
    "members": [
      "a753e0eb-3010-4c4a-a7b2-a7bda4063f62",
      "099627f8-4031-42e3-a846-006ee598c56e",
      "aefbfd62-727d-4424-89db-ae41f75d2e04",
      "d68ca71f-0e2c-458a-bb9c-1d6c2eed2497",
      "e4bc0740-f8fe-418c-ae1b-32d9926f5863"
    ],
    "threshold": 3
  },
  // mvm information. omit it if the dapp is not a MVM application
  "mvm": {
    "contract_url": "https://..."
  }
}
```