import type { BusinessFlowStep } from "@/domains/site/business-flow";

export const businessFlowSteps: BusinessFlowStep[] = [
  {
    id: "lead",
    title: "线索获取",
    scene: "从渠道、活动和转介绍统一归集潜在客户线索。",
    actions: ["统一录入客户线索", "自动标记来源渠道", "分配顾问跟进"],
    outcomes: ["线索流转透明", "减少遗漏与重复跟进"],
    roles: ["运营", "团队长"],
  },
  {
    id: "analysis",
    title: "需求分析",
    scene: "顾问快速梳理客户风险偏好、预算和保障诉求。",
    actions: ["结构化采集需求", "生成咨询摘要", "沉淀客户画像"],
    outcomes: ["沟通更聚焦", "需求信息可复用"],
    roles: ["顾问"],
  },
  {
    id: "proposal",
    title: "方案生成",
    scene: "结合产品库与规则，快速产出候选保险方案。",
    actions: ["AI 辅助匹配产品", "生成计划书框架", "展示关键收益与风险"],
    outcomes: ["方案准备提速", "客户理解成本降低"],
    roles: ["顾问", "团队长"],
  },
  {
    id: "closing",
    title: "签单跟进",
    scene: "推进预约、资料补齐与签约动作，减少断点。",
    actions: ["签单节点提醒", "材料状态追踪", "协同任务分派"],
    outcomes: ["签单效率提升", "过程可追踪"],
    roles: ["顾问", "运营"],
  },
  {
    id: "policy",
    title: "保单管理",
    scene: "签单后持续管理保单状态、关键日期和服务记录。",
    actions: ["保单信息集中管理", "到期与变更提醒", "服务记录归档"],
    outcomes: ["服务连续性提升", "降低人工错漏"],
    roles: ["运营", "团队长"],
  },
  {
    id: "renewal",
    title: "续期服务",
    scene: "围绕续期时点开展客户触达与增值服务建议。",
    actions: ["续期前主动触达", "自动生成跟进任务", "关联历史互动记录"],
    outcomes: ["续期率提升", "客户关系稳固"],
    roles: ["顾问", "运营"],
  },
];
