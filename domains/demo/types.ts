export type DemoRequest = {
  id: string;
  name: string;
  company: string;
  contact: string;
  email: string;
  role: string;
  interestedService: string;
  message: string;
  status: "new" | "contacted";
  createdAt: string;
};

export type DemoRequestInput = Omit<DemoRequest, "id" | "status" | "createdAt">;
