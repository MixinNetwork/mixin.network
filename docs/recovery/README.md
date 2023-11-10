---
title: 当前 Mixin 主网和其他周边服务的恢复情况
description: 当前 Mixin 主网和其他周边服务的恢复情况
editLink: false
sidebar: false
article: true
lastUpdated: false
contributors: false
---

## 本页面展示当前 Mixin 主网和其他周边服务的恢复情况

### Mixin 

**Mixin 新主网钱包**

- 涉及功能：转账与储值
- 当前状态：
  - 可以将大部分旧钱包中的资产，**单向迁移**到新钱包
  - 新主网充值和提现功能**暂停**
  - 旧主网提现功能**停止**，充值功能**暂停**，（这里要补充，什么样的提现会生效，什么样的充值会生效）
- 备注：升级 1.0 版本 Mixin Messenger 以后，进入右下角钱包，点击最上面的蓝条，才能进行手工迁移。

### Pando

> 关于 Pando各协议及产品目前运行状态及使用常见问题指引 的详情请参考：[这篇文章](https://quill.im/39204791/53e5f9e6-76d8-46bd-b276-650e852ea5c3)


**Pando Swap**

- 涉及功能：Swap 交易、挂单交易、流动性管理
- 当前状态：可添加和提取流动性，其他所有功能**暂停**。
- 计划：未来在新、旧主网分别重启，提供交易，暂无确切的重启时间。
- 备注：建议提取所有包含 USDT、BTC、ETH、BOX 的流动性资产。其他流动性资产可不提取。操作方式请参考[这篇文章](https://quill.im/39204791/53e5f9e6-76d8-46bd-b276-650e852ea5c3)。

**Pando Leaf**

- 涉及功能：铸币、还款、提取质押物
- 当前状态：只能**全额还款**；**无债务**的情况下可以提取质押物；**暂停**计息和清算。
- 计划：
  - 未来在新、旧主网分别重启。
  - 其中新主网提供完整 Leaf 功能，旧主网 Leaf 会关闭铸币，但是允许部分还款和提现，暂无确切的重启时间。
  - 提供 pUSD 双向桥，可以从新主网转换 pUSD 到旧主网。
- 备注：建议提取 sETH-BTC 质押物，其他金库可以不操作

**Pando Rings**

- 涉及功能：提供资金、质押、借款、还款、提取质押物
- 当前状态：只能**全额还款**；**无债务**的情况下可以提取 LP-Token 质押物；**暂停**计息和清算。
- 计划：
  - 未来在旧主网重启。
  - 旧主网 Rings 会关闭借款，但是允许部分还款和提现，暂无确切的重启时间。
- 备注：建议提取所有包含 USDT、BTC、ETH、BOX 的 LP-Token 质押物。

**XIN 节点**

- 涉及功能：购买和赎回 XIN 节点份额
- 当前状态：**开放**购买和赎回，但是由于新主网迁移，**暂停**发放收益。
- 备注：不需要额外操作，未来会自动迁移到新主网。

**BOX 资深理财**

- 涉及功能：购买和赎回 资深 BOX 理财份额
- 当前状态：**暂停**购买和赎回。
- 备注：不需要额外操作，未来会自动迁移到新主网，并且开放赎回和买入，并且发放对应的 Mixin 债券。

### Exin 

待补充

### Big.ONE

待补充
