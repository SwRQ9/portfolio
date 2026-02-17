import { HeroSection } from "@/components/sections/hero";
import { CredibilityStrip } from "@/components/sections/credibility-strip";
import { ProjectsSection } from "@/components/sections/projects";
import { ServicesSection } from "@/components/sections/services";
import { SkillsSection } from "@/components/sections/skills";
import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CredibilityStrip />
      <ProjectsSection />
      <ServicesSection />
      <SkillsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
