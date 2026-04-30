import { ChatbotShowcase } from "@/components/ai/chatbot-showcase";
import { ProposalShowcase } from "@/components/ai/proposal-showcase";
import { AppCollaborationShowcase } from "@/components/site/app-collaboration-showcase";
import { BusinessFlowShowcase } from "@/components/site/business-flow-showcase";
import { CtaSection } from "@/components/site/cta-section";
import { HeroSection } from "@/components/site/hero-section";
import { ServiceCapabilities } from "@/components/site/service-capabilities";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServiceCapabilities />
      <BusinessFlowShowcase />
      <AppCollaborationShowcase />
      <ChatbotShowcase />
      <ProposalShowcase />
      <CtaSection />
    </main>
  );
}
