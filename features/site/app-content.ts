import type { AppCapability } from "@/domains/site/business-flow";

export const appCapabilities: AppCapability[] = [
  {
    id: "product-library",
    title: "产品库",
    description: "随时查看最新产品信息、保障结构与费率规则。",
    value: "顾问外出也能快速答复客户。",
  },
  {
    id: "product-compare",
    title: "产品对比",
    description: "并列比较产品保障、收益与适配人群。",
    value: "缩短方案解释时间。",
  },
  {
    id: "premium-estimator",
    title: "保费试算",
    description: "基于输入条件快速给出保费区间估算。",
    value: "提升首次沟通效率。",
  },
  {
    id: "crm",
    title: "客户管理",
    description: "查看客户跟进状态与关键互动记录。",
    value: "避免客户跟进中断。",
  },
  {
    id: "message",
    title: "消息提醒",
    description: "签单、资料补充、续期节点自动提醒。",
    value: "关键节点不遗漏。",
  },
  {
    id: "card-share",
    title: "名片分享",
    description: "一键分享顾问信息与服务入口。",
    value: "提升传播与触达效率。",
  },
];
