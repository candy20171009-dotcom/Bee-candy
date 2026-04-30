export type BusinessFlowRole = "顾问" | "团队长" | "运营";

export type BusinessFlowStep = {
  id: string;
  title: string;
  scene: string;
  actions: string[];
  outcomes: string[];
  roles: BusinessFlowRole[];
};

export type SecurityCapability = {
  id: string;
  title: string;
  controls: string[];
  scenario: string;
};

export type AppCapability = {
  id: string;
  title: string;
  description: string;
  value: string;
};
