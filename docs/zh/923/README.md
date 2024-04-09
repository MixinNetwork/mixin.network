---
title: Mixin 923 黑客事件披露与进展
description: Mixin 923 黑客事件披露与进展
editLink: false
sidebar: false
article: true
lastUpdated: false
contributors: false
---

# Mixin 923 黑客事件披露与进展

（2024 年 4 月 09 日更新）

## 事件说明

Mixin Network 于 2023 年 9 月 23 日遭受了黑客攻击，本次攻击主要资产为 ETH、BTC 和 USDT-ERC20，其他币有不同程度损失，三个主要黑客的地址：

- [https://etherscan.io/address/0x52e86988bd07447c596e9b0c7765f8500113104c](https://etherscan.io/address/0x52e86988bd07447c596e9b0c7765f8500113104c)
- [https://explorer.btc.com/btc/address/bc1qq7uefmz6nng5c4dzs9mwrxxyh9sxg5cjg85hes](https://explorer.btc.com/btc/address/bc1qq7uefmz6nng5c4dzs9mwrxxyh9sxg5cjg85hes)
- [https://etherscan.io/address/0x3B5fb9d9da3546e9CE6E5AA3CCEca14C8D20041e](https://etherscan.io/address/0x3B5fb9d9da3546e9CE6E5AA3CCEca14C8D20041e)

事件主要原因是因为黑客侵入了 Mixin 提现依赖的 Google 云服务并利用了一个程序漏洞构造了大量未授权的提现请求。

## 事件处理

### 调查追踪

发现大量异常提现后我们立刻停止了网络所有的充值和提现服务，其他措施包括：

- 联系 Slowmist 等区块链安全公司进行链上追踪。
- 聘请 Google Mandiant 团队协助调查黑客入侵 Google 云服务。
- 公布 2 千万美金作为黑客归还资产奖励。

截止到目前，被盗的资产仍然在地址里没有转移，被入侵的原因仍然调查之中。

### 债务定损

经过统计和评估被盗资产、团队现有资金，与社区、大户和投资人的沟通，并考虑 Mixin 未来巨大的发展潜力，现公示如下：

- Mixin 团队先利用现有资金针对不同受损币种资产覆盖部分或全部损失。
- 未能覆盖损失的 BTC、ETH 和 USDT-ERC20 按被盗时美元价值固定折算成债务，总计 1.53 亿美元债务，Mixin 团队承诺将 100% 偿还这些债务。具体如下表格：

| 币种         | 损失  | 定损价格        | 定损总量            | 举例                                               |
| ---------- | --- | ----------- | --------------- | ------------------------------------------------ |
| BTC        | 10% | 26569 USD   | 30,000,000 USD  | 旧系统 1 BTC ⇒ 新系统 0.9 BTC + 2656.9 美元债务            |
| ETH        | 70% | 1592.74 USD | 100,000,000 USD | 旧系统 1 ETH ⇒ 新系统 0.3 ETH + 1114.918 美元债务          |
| USDT-ERC20 | 90% | 1 USD       | 23,000,000 USD  | 旧系统 1 USDT-ERC20 ⇒ 新系统 0.1 USDT-ERC20 + 0.9 美元债务 |

- 如果后续黑客还币，资产将归属于所有持有债务的用户。

### 债务领取

目前有 16,143 人登记了债务，其中 90% 已完成债务领取，债务不足 100 美元的用户可兑换 XIN 立刻获得偿还。

### 偿还计划

- 已登记债务的用户中 50% 用户已通过兑换 XIN 获得了立刻偿还。
- 参与组建 Mixin Autonomous Organization，以 15 万 XIN （当前市值约为 4000 万美金）为基础发展 Mixin 生态、补偿债务持有人。
- Mixin Safe、Mixin Wealth、Mixin Route 和 Mixin Messenger 一系列 Mixin 团队开发产品和投资所产生的收入 — — 除了保留团队开支和发展资金将全部用于偿还债务，详细的计划预计在 7-8 月份公布。

## 恢复进展

### 生态恢复进展

- Mixin Network 于 2023 年 10 月 27 日上线了新主网，平稳运行至今，节点收益正常发放。
- Mixin Safe [https://safe.mixin.one](https://safe.mixin.one/) 完成第一个安全审计，新支持以太坊和 Polygon 网络，上线地址薄、共管人等功能，细节和流程做了大量优化。
- Mixin Messenger 已支持所有主流币的充值和提现，自 923 以来已迭代超过 40 个版本，支持资产迁移、债务代币领取。
- Mixin Route 法币购买功能已完全恢复。
- ExinOne 和 ExinPool 相关的闪兑交易、挂单交易、定投、借贷和 Staking 功能已完全恢复。
- Pando Swap 的交易、挂单交易、流动性管理功能已完全恢复。
- BOX 社群、购买和赎回已完全恢复。
- 去中心化的 web3 跨链支付协议 MixPay 已完全恢复。
- BigONE 交易机器人挂单、量化、闪兑已完全恢复。
- 第三方区块链浏览器 ViewBlock 已支持 Mixin 新主网数据展示。

### 网络资产提现恢复进展

| 区块链              | 状态  | 恢复时间     |
| ---------------- | --- | -------- |
| TRON             | ✅   | 20231122 |
| Litecoin         | ✅   | 20231213 |
| Dogecoin         | ✅   | 20231214 |
| Bitcoin          | ✅   | 20231215 |
| Polygon          | ✅   | 20231218 |
| Ethereum         | ✅   | 20231221 |
| MobileCoin       | ✅   | 20231229 |
| BNB Smart Chain  | ✅   | 20240101 |
| EOS              | ✅   | 20240102 |
| Ripple           | ✅   | 20240105 |
| Bitcoin SV       | ✅   | 20240108 |
| Bitcoin Cash     | ✅   | 20240108 |
| Dash             | ✅   | 20240108 |
| Horizen          | ✅   | 20240109 |
| Filecoin         | ✅   | 20240112 |
| Monero           | ✅   | 20240121 |
| Polkadot         | ✅   | 20240125 |
| Siacoin          | ✅   | 20240209 |
| Nervos           | ✅   | 20240215 |
| Solana           | ✅   | 20240216 |
| Toncoin          | ✅   | 20240310 |
| Cosmos           | ✅   | 20240401 |
| Akash            | ✅   | 20240401 |
| Ravencoin        | ✅   | 20240401 |
| Zcash            | ✅   | 20240403 |
| Arweave          | 🚗   |          |
| Aptos            | 🚗   |          |
| NEAR             | 🚗   |          |
| Avalanche        | 🚗   |          |
| Algorand         | 🚗   |          |
| Kusama           | 🚗   |          |
| Stellar          | 🚗   |          |
| NEM              | 🚗   |          |
| Ethereum Classic | 🚗   |          |