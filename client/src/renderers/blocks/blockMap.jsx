import AboutTextBlock from '../../components/sections/home/about-section/AboutTextBlock';
import AboutCardBlock from '../../components/sections/home/about-section/AboutCardBlock';
import WorkExperienceHighlightsBlock from '../../components/organisms/work-experience-section/WorkExperienceHighlightsBlock';
import WorkExperienceMetaInfoBlock from '../../components/organisms/work-experience-section/WorkExperienceMetaInfoBlock';
import SkillsCardBlock from '../../components/sections/home/skills-section/SkillsTextBlock';
import SkillsTextBlock from '../../components/sections/home/skills-section/SkillsTextBlock';
import ProjectsCarouselBlock from '../../components/organisms/projects-section/ProjectsCarouselBlock';
import ProjectsTextBlock from '../../components/organisms/projects-section/ProjectsTextBlock';
import ContactTextBlock from '../../components/organisms/contact-section/ContactTextBlock';
import ContactFormBlock from '../../components/organisms/contact-section/ContactFormBlock';
import DeveloperJourneyBlock from '../../components/sections/about/journey-section/DeveloperJourneyBlock';
import AcademicJourneyBlock from '../../components/sections/about/journey-section/AcademicJourneyBlock';
import CoreValuesBlock from '../../components/sections/about/core-values-section/CoreValuesBlock';
import CurrentSkillsSnapshotOverviewBlock from '../../components/sections/about/current-skills-snapshot/currentSkillsSnapshotOverviewBlock';
import CurrentSkillsSnapshotSkillsBlock from '../../components/sections/about/current-skills-snapshot/CurrentSkillsSnapshotSkillsBlock';

export const BLOCK_MAP = {
  developerJourneySummary: AboutTextBlock,
  academicJourneySummary: AboutCardBlock,
  workExperienceHighlights: WorkExperienceHighlightsBlock,
  workExperienceMetaInfo: WorkExperienceMetaInfoBlock,
  skillsCardsBlock: SkillsCardBlock,
  skillsTextBlock: SkillsTextBlock,
  projectsCarouselBlock: ProjectsCarouselBlock,
  projectsTextBlock: ProjectsTextBlock,
  contactTextBlock: ContactTextBlock,
  contactFormBlock: ContactFormBlock,
  developerJourneyDetailed: DeveloperJourneyBlock,
  academicJourneyDetailed: AcademicJourneyBlock,
  coreValues: CoreValuesBlock,
  currentSkillsSnapshotOverview: CurrentSkillsSnapshotOverviewBlock,
  currentSkillsSnapshotSkills: CurrentSkillsSnapshotSkillsBlock,
};

