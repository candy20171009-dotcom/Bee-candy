import type { SecurityCapability } from "@/domains/site/business-flow";

export const securityCapabilities: SecurityCapability[] = [
  {
    id: "transmission",
    title: "传输加密",
    controls: ["全链路 HTTPS/TLS", "接口通信证书校验"],
    scenario: "保护顾问与客户交互数据在传输过程不被窃听或篡改。",
  },
  {
    id: "storage",
    title: "数据存储加密",
    controls: ["关键字段加密存储", "数据库备份加密"],
    scenario: "降低数据落盘后被非法读取的风险。",
  },
  {
    id: "access",
    title: "权限与访问控制",
    controls: ["基于角色的访问控制（ACL）", "最小权限分配策略"],
    scenario: "确保顾问、运营、管理者仅访问职责范围内数据。",
  },
  {
    id: "backup",
    title: "备份与恢复",
    controls: ["定期自动备份", "恢复流程可演练"],
    scenario: "在异常中断后快速恢复业务连续性。",
  },
  {
    id: "audit",
    title: "审计与追踪",
    controls: ["关键操作日志记录", "异常行为可追溯"],
    scenario: "为内部稽核与合规检查提供可验证依据。",
  },
];

export const securityTerms = [
  { term: "ACL", desc: "访问控制列表，用于定义谁可访问什么资源。" },
  { term: "审计日志", desc: "记录关键操作轨迹，用于问题排查和合规核查。" },
  { term: "传输加密", desc: "通过 TLS 在网络传输过程中保护数据。" },
  { term: "存储加密", desc: "对数据持久化内容进行加密，降低泄露影响。" },
];
