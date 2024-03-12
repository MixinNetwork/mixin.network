---
title: Mixin Network 923 Hack Incident Disclosure and Compensation Plan
description: Mixin Network 923 Hack Incident Disclosure and Compensation Plan
editLink: false
sidebar: false
article: true
lastUpdated: false
contributors: false
---

## Mixin Network 923 Hack Incident Disclosure and Compensation Plan

## What is MDT token?

MDT is the Mixin Debt Token issued by Mixin as a debt token pegged to the US dollar value. There are mainly three types: MDTu, MDTe and MDTb, representing debts against three types of assets: erc20-USDT, ETH, and BTC.

## Why issue debt tokens?

The Mixin Network suffered a hacker attack on September 23, 2023. This attack mainly involved assets of erc20-USDT, ETH, and BTC, equivalent to about $150 million at the time, **other assets were unaffected**. After several days of data statistics and team repayment capability assessment, Mixin is unable to repay immediately according to the currency-pegged model and can only issue dollar debt in the form of issuing debt tokens and use profits from continued business development to repay the debt.

## Why issue three types of debt tokens?

Although the debts are all pegged to the USD price at midnight on September 23 and denominated in US dollars, Mixin will repay in the order of erc20-usdt, ETH, and BTC. That is, MDTu will be repaid first, followed by MDTe, and finally MDTb.

## Debt ratio during migration

When you upgrade Mixin Messenger to version 1.5.0 or above, the wallet shows the assets as 0, and there is a blue prompt at the top **"You have unmigrate assets, please tap to start migration"** to guide you to migrate assets from the old system to the new system.

||| Please note that migration is a one-way operation. Once assets are migrated to the new system, they cannot be returned to the old system!
||| You can migrate assets to the new system at any time. The old system will continue to run in sync.

When you migrate erc20-USDT, ETH, BTC and BOX, you will automatically enter the debt registration page. At this time, the page will show the amount you had in the old system, the amount you obtained in the new system, and the number of debt tokens. Confirm there is no error, and then you can enter the PIN to confirm migration.

Among them, the debt ratio is 90% for erc20-USDT, 70% for ETH, 10% for BTC, and 7.29% for BOX. We can calculate the debt tokens more clearly through the table below:

| Old wallet assets | New wallet obtain ratio | New system obtained tokens (=Old wallet asset qty * New system obtain ratio) | Debt ratio | Token price at September 23 midnight (USD) | New system obtained debt (=Old wallet asset qty * Price * Debt ratio)| Final obtained amount |
| --- | --- | --- | --- | --- | --- | --- | 
| 100 erc20-USDT | 10% | 10 USDT(100*10%) | 90% | 1 | 90 MDTu(100*1*90%) | 10 erc20-USDT + 90 MDTu |
| 1 ETH | 30% | 0.3 ETH(1*30%) | 70% | 1592 | 1114.4 MDTe(1*1592*70%) | 0.3 ETH + 1114.4 MDTe | 
| 1 BTC | 90% | 0.9 BTC(1*90%) | 10% | 26569 | 2656.9 MDTb(1*26569*10%) | 0.9 BTC + 2656.9 MDTb |
| 100 BOX | 92.71% | 92.71 BOX(100*92.71%) | 7.29% | 0.11258467 MDTb + 0.1114918 MDTe | 11.258467 MDTb+11.14918 MDTe | 92.71 BOX + 11.258467 MDTb + 11.14918 MDTe |

|| BOX was not a directly damaged asset, but BOX price composition includes ETH and BTC. After calculation, the lost 7.29% is replaced by corresponding MDT tokens, which means 1 BOX will contain 0.11258467 MDTb + 0.1114918 MDTe debt.