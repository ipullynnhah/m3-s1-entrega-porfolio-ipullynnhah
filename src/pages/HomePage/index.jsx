import { AboutMeSection } from "../../components/AboutMeSection";
import { BannerSection } from "../../components/BannerSection";
import { ProjectSection } from "../../components/ProjectSection";
import { TechSection } from "../../components/TechSection";
import { TemplatePage } from "../TemplatePage";

export function HomePage() {
  return (
    <TemplatePage>
      <BannerSection />
      <AboutMeSection />
      <TechSection />
      <ProjectSection />
    </TemplatePage>
  );
}
