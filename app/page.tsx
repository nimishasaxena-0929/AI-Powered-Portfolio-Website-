import HeroSection from "@/components/hero/hero-section";
import AboutSection from "@/components/about/about-section";
import TechStackSection from "@/components/tech-stack/tech-stack-section";
import ProjectsSection from "@/components/projects/projects-section";
import ArchitectureSection from "@/components/architecture/architecture-section";
import AiLabSection from "@/components/ai-lab/ai-lab-section";
import EducationSection from "@/components/education/education-section";
import ContactSection from "@/components/contact/contact-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <ProjectsSection />
      <ArchitectureSection />
      <AiLabSection />
      <EducationSection />
      <ContactSection />
    </>
  );
}
