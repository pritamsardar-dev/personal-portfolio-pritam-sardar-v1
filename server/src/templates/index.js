import { homePageTemplate } from "./page/home.page.template.js";
import { aboutPageTemplate } from "./page/about.page.template.js";
import { workExperiencePageTemplate } from "./page/workExperience.page.template.js";
import { skillsPageTemplate } from "./page/skills.page.template.js";
import { projectsPageTemplate } from "./page/projects.page.template.js";
import { caseStudiesPageTemplate } from "./page/caseStudies.page.template.js";
import { contactPageTemplate } from "./page/contact.page.template.js";
import { viewDetailsPageTemplate } from "./page/viewDetails.page.template.js";
import { fullCaseStudyPageTemplate } from "./page/fullCaseStudy.page.template.js";

import { heroSectionTemplate } from "./section/hero.section.template.js";
import { journeySectionTemplate } from "./section/journey.section.template.js";
import { workItemsSectionTemplate } from "./section/workItems.section.template.js";
import { skillsSectionTemplate } from "./section/skills.section.template.js";
import { contactSectionTemplate } from "./section/contact.section.template.js";
import { currentSkillsSnapshotTemplate } from "./section/currentSkillsSnapshot.section.template.js";

export const pageTemplates = {
  home: homePageTemplate,
  "view-details": viewDetailsPageTemplate,
  "full-case-study": fullCaseStudyPageTemplate,
  about: aboutPageTemplate,
  "work-experience": workExperiencePageTemplate,
  skills: skillsPageTemplate,
  projects: projectsPageTemplate,
  "case-studies": caseStudiesPageTemplate,
  contact: contactPageTemplate,
};

export const sectionTemplates = {
  hero: heroSectionTemplate,
  journey: journeySectionTemplate,
  "work-items": workItemsSectionTemplate,
  skills: skillsSectionTemplate,
  contact: contactSectionTemplate,
  "current-skills-snapshot": currentSkillsSnapshotTemplate,
};
