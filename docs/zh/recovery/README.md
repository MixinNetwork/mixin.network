---
title: 当前 Mixin 主网和其他周边服务的恢复情况
description: 当前 Mixin 主网和其他周边服务的恢复情况
editLink: false
sidebar: false
article: true
lastUpdated: false
contributors: false
---

## 当前 Mixin 主网和其他周边服务的恢复情况

### Mixin 

**Mixin 新主网钱包**

- 涉及功能：转账与储值
- 当前状态：
  - ✅ 可以将大部分旧钱包中的资产，**单向迁移**到新钱包
  - ✅ 现在 Mixin 已经支持充值的有：
        1. Bitcoin BTC
        2. Ethereum 链上的所有资产
        3. Polygon 链上的所有资产
        4. BSC 链上的所有资产
        5. Litecoin LTC
        6. EOS 链上所有的资产
        7. Ripple XRP
        8. Dogecoin DOGE
        9. TRON 链上的所有资产如 USDT-TRC20，TRX 等
        10. MobileCoin 的充值，包括 MOB 和 eUSD 
  - ✅ 现在 Mixin 已经开放提现的有：
        1. Bitcoin BTC
        2. TRON 链上的所有资产，比如 TRX，USDT 等
        3. Litecoin LTC
        4. Dogecoin DOGE
        5. Polygon 链上的所有资产，比如 MATIC，USDT，USDC 等等 
        6. Ethereum 链上的所有资产，比如 ETH，USDT-ERC20 等等
        7. MobileCoin 的资产 MOB 和 eUSD
        8. BSC 链上的所有资产，比如 BNB，USDT，USDC 等等
        9. EOS 链上的所有资产，比如 EOS，USDT，IQ 等等
        10. Ripple XRP
  - ❌ 旧主网提现功能**停止**，⏸️ 充值功能**暂停**，请勿充值资产到旧系统。
- 备注：升级 1.1 版本 Mixin Messenger 以后，进入右下角钱包，点击最上面的蓝条，才能进行手工迁移。
  - Mixin 资产[迁移教程](https://support.mixin.one/zh/article/5aac5l2v5oqk6lwe5lqn5luo5pen6zkx5yyf6lb56e76iez5paw6zkx5yyf77yf-my2a1e/)
  - MDT [债券介绍](https://support.mixin.one/zh/article/mdt-w0b7ju/)

### Pando

> 关于 Pando各协议及产品目前运行状态及使用常见问题指引 的详情请参考：[这篇文章](https://quill.im/39204791/53e5f9e6-76d8-46bd-b276-650e852ea5c3)

**Pando Swap**

- 涉及功能：Swap 交易、挂单交易、流动性管理
- 当前状态(旧主网版)：
  - ✅ 可添加和提取流动性
  - ⏸️ 其他所有功能**暂停**。
- 当前状态(新主网版):
  - ✅ 服务重启，所有功能正常
  - ‼️ 流动性还比较低，交易时请留意价格影响
- 备注：建议提取旧主网版本中所有包含 USDT、BTC、ETH、BOX 的流动性资产。其他流动性资产可不提取。操作方式请参考[这篇文章](https://quill.im/39204791/53e5f9e6-76d8-46bd-b276-650e852ea5c3)。

**Pando Leaf**

- 涉及功能：铸币、还款、提取质押物
- 当前状态：
  - ✅ 除 ETH、sETH-BTC、XIN 和 MOB 金库以外，旧主网 Leaf 上其他所有金库恢复部分还款和部分赎回功能
  - ✅ 除 ETH、sETH-BTC、XIN 和 MOB 金库, 旧主网 Leaf 上其他所有金库恢复计息和清算
  - ✅ 可以通过 [pUSD 桥](https://app.pando.im/swap/pusd)（Mixin新主网到旧主网方向）将新主网中的稳定币按 1:1 比例转化为旧主网上的 pUSD，用户偿还 Leaf 中的 pUSD 债务
  - ✅ 旧主网版本还款：可访问 https://app-legacy.pando.im/leaf/vaults 或者搜索 @7000105018 切换到旧主网
  - ⏸️ 对于 ETH、sETH-BTC、XIN 和 MOB 金库，**依然暂停计息和清算，只能全额还款**，且仅支持**无债务**的情况下提取质押物
- 计划：
  - 未来在新主网单独重启。
  - 新主网上提供完整 Leaf 功能，旧主网 Leaf 会关闭铸币，但是允许部分还款和提现，暂无确切的重启时间。
  - 提供 pUSD 双向桥，用户也可以将旧主网的 pUSD 兑换为新主网上的稳定币。
- 备注：建议担心除 ETH、sETH-BTC、XIN 和 MOB 抵押物清算风险的用户尽快还款

**Pando Rings**

- 涉及功能：提供资金、质押、借款、还款、提取质押物
- 当前状态：
  - ✅ 只能**全额还款**；**无债务**的情况下可以提取所有流动性池中的质押物；
  - ✅ 可以通过 [pUSD 桥](https://app.pando.im/swap/pusd)（Mixin新主网到旧主网方向）将新主网中的稳定币按 1:1 比例转化为旧主网上的 pUSD，用户偿还 Rings 中的 pUSD 债务
  - ⏸️ **暂停**计息和清算。
- 计划：
  - 未来在旧主网重启。
  - 旧主网 Rings 会关闭借款，但是允许部分还款和提现，暂无确切的重启时间。
- 备注：建议提取所有包含 USDT、BTC、ETH、BOX 的 LP-Token 质押物。

**XIN 节点**

- 涉及功能：购买和赎回 XIN 节点份额
- 当前状态：
  - ✅ 已重新**开放**购买和赎回
  - ✅ 已迁移到新主网
  - ⏸️ 由于新主网迁移，依然**暂停**发放收益
- 备注：不需要额外操作，将会补发暂停操作期间的理财收益

**BOX 资深理财**

- 涉及功能：购买和赎回 资深 BOX 理财份额
- 当前状态：
  - ✅ 已重新**开放**购买和赎回
  - ✅ 已迁移到新主网
  - ✅ 已补发暂停操作期间的理财收益

**B.watch**

- 涉及功能：购买和赎回 BOX 成分
- 当前状态：⏸️ **暂停**购买和赎回。
- 备注：不需要额外操作，未来会自动迁移到新主网，并且开放赎回和买入。

**BEE.holdings**

- 涉及功能：购买和赎回 BEE 成分
- 当前状态：⏸️ **暂停**购买和赎回。具体方案尚未确定。
- 备注：不需要额外操作。

### Exin 

**ExinOne**

- 涉及功能：闪兑交易、挂单交易、定投、借贷。
- 当前状态：
  - ✅ 已迁移至新系统；
  - ✅ 支持在新系统内交易、挂单、定投；
  - ExinOne 的钱包模块介绍了如何查看新旧系统的钱包，未来将展示新系统钱包资产。
- 计划：EPC 账户资产展示将在不久后恢复。
- 备注：更多细节请[查阅文档](https://support.exinone.com/zh-CN/docs/Instructions/faq)


**ExinPool**

- 涉及功能：Staking
- 当前状态：✅ 已迁移至新系统，所有节点加入 & 退出功能均已恢复。
- 计划：✅ 已补发 TRX、MATIC、ETH、AXS、AVAX、AKT、ZEN 的历史收益，其它节点收益也将陆续补发。

**ExinSwap**

- 涉及功能：Swap
- 当前状态：暂停交易，支持退出流动性。

**MixSwap**

- 涉及功能：Swap
- 当前状态：暂停交易

### BigONE

- 涉及功能：划转
- 当前状态：旧网络 USDT 对应到 USDT( ERC20 )，BTC、ETH 不可划转，其余正常；
- 计划：旧网络保持当前状态，新网络支持所有资金划转；
- 备注：划转操作将增加新旧网络的区分

**BigONE Earn 机器人**

- 涉及功能：现有产品自动迁移到新主网，已取出资产兑换
- 当前状态：
  - 当前机器人对应旧网络；
  - BTC、ETH、USDT 活期和定期暂停存入，BTC、ETH、USDT 活期暂停取出； 
- 计划：自动迁移到新网络，旧网络不再支持；
- 备注：现有产品自动迁移，无需操作；已取出资产部分需手动兑换；

**BigONE 交易机器人**

- 涉及功能：转入转出
- 当前状态： 
  - 当前机器人对应 Mixin 旧网络；
  - 原交易账户中的 ERC20 USDT 、BTC、ETH 分别记为 MixinUSDT、MixinBTC、MixinETH，可以转出到旧网络，转出后不可再转入交易账户；
  - 旧网络中的 TRC20 USDT 可以转入至交易账户；
  - USDT 对应到 TRC20 USDT；
  - 交易获得的新的 BTC、ETH 为未受损的代币，暂不支持转出；
- 计划：
  - 交易账户中的资产自动迁移到新网络，旧网络不再支持；
  - 迁移后 USDT 对应到新网络 ERC20 USDT；
- 备注：迁移时挂单自动撤销，所有资产、量化策略自动迁移，无需操作；

### MVG Finance

- 涉及功能: 充值和提现 
- 当前状态:
  - ⏸️ 暂停充值和提现: 在迁移到新主网前，充值和提现将暂时停止。请暂停充提操作，在新版本上线后再进行充提。
  - 资产安全: 所有在2023年9月23号之后的充值都是安全的。在黑客攻击阶段发送的提现都已经退款。如果有任何疑问，请通过Mixin/Telegram/Discord联系我们。
- 计划: 当新系统的API & SDK能够使用时，我们会将MVG Bridge 迁移到新系统。V2版本的测试和部署会在MVM迁移之后执行。
- 备注: 您的资产是安全的。我们建议您在新版本上线之后再进行充值和提现操作。除此之外，无需进行其他操作。
