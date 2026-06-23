import AboutSection from "../../components/sections/home/about-section/AboutSection";
import WorkExperienceSection from "../../components/organisms/work-experience-section/WorkExperienceSection";
import WorkItemsSection from "../../components/organisms/work-items-section/WorkItemsSection";
import SkillsSection from "../../components/sections/home/skills-section/SkillsSection";
import ContactSection from "../../components/organisms/contact-section/ContactSection";
import HeroSection from "../../components/organisms/hero-section/HeroSection";
import JourneySection from "../../components/sections/about/journey-section/JourneySection";
import CurrentSkillsSnapshotSection from "../../components/sections/about/current-skills-snapshot/CurrentSkillsSnapshotSection";
import SkillsRowsSection from "../../components/sections/skills/skillsRowsSection/SkillsRowsSection";

export const SECTION_MAP = {
  hero: HeroSection,
  journeyHome: AboutSection,
  workExperienceHome: WorkExperienceSection,
  skillsHome: SkillsSection,
  projectsHome: WorkItemsSection,
  contact: ContactSection,
  journey: JourneySection,
  currentSkillsSnapshot: CurrentSkillsSnapshotSection,
  workExperience: WorkExperienceSection,
  skills: SkillsRowsSection,
  projects: WorkItemsSection,
  viewDetailsProjects: WorkItemsSection,
  caseStudies: WorkItemsSection,
  viewDetails: WorkItemsSection,
  fullCaseStudy: WorkItemsSection,
};
