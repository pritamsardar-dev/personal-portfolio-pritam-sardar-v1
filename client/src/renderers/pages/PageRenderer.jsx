import React, { useEffect, useMemo } from "react";

import SectionRenderer from "../sections/sectionRenderer";
import { useSectionNavWrite } from "../../hooks/useSectionNav";
import { resolveProps } from "../../utils/resolveProps";

const sectionGapClasses = `
    flex flex-col w-full items-center justify-center
    gap-(--spacing-section-wrapper-mobile-padding-y)
    sm:gap-(--spacing-section-wrapper-tablet-padding-y)
    lg:gap-(--spacing-section-wrapper-desktop-padding-y)
`;

const resolveSectionLabel = (sectionWrapper) => {
  const { ref, key, view } = sectionWrapper;

  if (typeof ref?.heading?.text === "string" && ref.heading.text.trim()) {
    return ref.heading.text.trim();
  }

  if (Array.isArray(ref?.heading?.textParts) && ref.heading.textParts[0]?.text) {
    return ref.heading.textParts[0].text.trim();
  }

  const raw = view || key || ref?.type || "Section";

  return (
    raw
      .replace(/([A-Z])/g, " $1")
      .replace(/(home|page)$/i, "")
      .trim()
      .replace(/\b\w/g, (c) => c.toUpperCase()) || "Section"
  );
};

// Extracts nav icon from section data regardless of nesting depth.
// Pure function only uses its own parameter, so it lives at module scope
// and never needs to appear in a useEffect dependency array.
const resolveNavIcon = (sectionRef) => {
  const h = sectionRef?.heading;
  if (!h) return null;
  // Direct icon on heading
  if (h.icon?.src) return h.icon;
  // Walk one level into variant keys (e.g. heading.skills.icon, heading.project.icons.default)
  for (const key of Object.keys(h)) {
    const val = h[key];
    if (!val || typeof val !== "object" || Array.isArray(val)) continue;
    if (val.icon?.src) return val.icon;
    if (val.icons?.default?.src) return val.icons.default;
  }
  return null;
};

// Resolves the correct domain/subcontext per work-items render view so that
// work experience, projects, and case studies each pull their OWN heading icon
// (they share the same section ref on the home page, which previously caused
// them to accidentally resolve to whichever icon the generic walker found first).
const WORK_ITEMS_NAV_ICON_CONTEXT = {
  workExperienceHome: ["experience", "home"],
  projectsHome: ["project", "preview"],
  projects: ["project", "preview"],
  caseStudies: ["caseStudy", "preview"],
};

// Same reasoning as resolveNavIcon parameter-driven, kept at module scope
// for a permanently stable reference.
const resolveWorkItemsNavIcon = (sectionRef, view) => {
  const ctx = WORK_ITEMS_NAV_ICON_CONTEXT[view];
  if (!ctx || !sectionRef) return resolveNavIcon(sectionRef);

  const [domain, subcontext] = ctx;
  const resolved = resolveProps(resolveProps(sectionRef, domain), subcontext);
  const h = resolved?.heading;

  // WorkItemsSection nests icon under heading.icons.default for the non-fullscreen
  // state; WorkExperienceSection spreads heading.icon directly. Check both shapes.
  const icon = h?.icons?.default?.src ? h.icons.default : h?.icon?.src ? h.icon : null;

  return icon || resolveNavIcon(sectionRef);
};

const PageRenderer = ({
  data,
  isLoading,
  isFilterLoading,
  mode,
  size,
  imageid,
  ui,
  handlers,
  state,
}) => {
  const { setNavSections } = useSectionNavWrite();

  const page = data?.page;
  const { page: _, ...apiData } = data || {};

  const sections = useMemo(() => {
    if (!Array.isArray(page?.sections)) return [];

    return page.sections
      .filter((section) => section?.enabled && section?.ref)
      .flatMap((section) => {
        if (Array.isArray(section.renders) && section.renders.length > 0) {
          return section.renders
            .filter((render) => render?.enabled !== false)
            .map((render) => ({
              ...section,
              view: render.view,
              variant: render.variant,
              order: render.order,
              renders: undefined,
            }));
        }
        return [section];
      })
      .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  }, [page]);

  useEffect(() => {
    if (isLoading) {
      setNavSections([]);
      return;
    }

    const seen = new Set();

    // Views whose section component appends `${variant}` to id
    const VARIANT_SUFFIXED_VIEWS = new Set([
      "projectsHome",
      "caseStudies",
      "projects",
      "viewDetails",
      "fullCaseStudy",
    ]);

    // Skill rows can carry their heading on the row itself, on the
    // overview block, or on that block's first body item try all three
    const resolveSkillRowHeading = (row) => {
      const overviewBlock = (row.blocks || []).find(
        (b) => b.type === "contextBlock" || b.id === "skill-overview",
      );
      return (
        row.heading ||
        overviewBlock?.data?.heading ||
        overviewBlock?.data?.bodyItems?.[0]?.heading ||
        null
      );
    };

    // Experience rows carry their heading inside the meta info block's
    // "metaInfo" body item (same lookup WorkItemsTextBlock.jsx uses)
    const resolveExperienceRowHeading = (row) => {
      const metaBlock = (row.blocks || []).find(
        (b) => b.id === "work-experience-meta-info",
      );
      return (
        row.heading ||
        metaBlock?.data?.bodyItems?.find((item) => item.id === "metaInfo")?.heading ||
        null
      );
    };

    const navItems = sections.reduce((acc, s) => {
      if (!s.ref?.id) return acc;

      // Skip currentSkillsSnapshot on about page
      if (s.key === "current-skills-snapshot") return acc;

      // Only the dedicated About page's journey section expands into its
      // child blocks. Home reuses this section as "journeyHome" and must
      // stay a single nav item.
      if (s.key === "journey" && s.view !== "journeyHome") {
        const resolved = resolveProps(s.ref || {}, "about");
        const journeyRows = Array.isArray(resolved?.rows)
          ? resolved.rows
          : [];
        const blocks = journeyRows
          .filter((r) => r?.enabled !== false)
          .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
          .flatMap((r) =>
            (r.blocks || [])
              .filter((b) => b?.enabled !== false)
              .sort((a, b) => (a.order ?? 0) - (b.order ?? 0)),
          );
        if (blocks.length > 0) {
          blocks.forEach((block) => {
            if (!block.id || seen.has(block.id)) return;
            seen.add(block.id);
            const h = block.data?.heading;
            const labelText =
              typeof h?.text === "string" ? h.text : "Section";
            acc.push({
              id: block.id,
              label: labelText,
              icon: resolveNavIcon({ heading: h }),
              order: s.order,
              type: "block",
            });
          });
          return acc;
        }
      }

      // Only the dedicated Skills page expands into At a Glance + rows.
      // Home reuses this section as "skillsHome" and must stay a single
      // nav item.
      if (s.key === "skills" && s.view !== "skillsHome") {
        const resolved = resolveProps(s.ref || {}, "skills");
        const skillRows = Array.isArray(resolved?.rows) ? resolved.rows : [];
        const atAGlance = resolved?.atAGlance;
        const hasAtAGlance = atAGlance && atAGlance.enabled !== false && atAGlance.id;

        if (skillRows.length > 0 || hasAtAGlance) {
          // At a Glance has no icon of its own fall back to the
          // Skills section's own heading icon
          if (hasAtAGlance && !seen.has(atAGlance.id)) {
            seen.add(atAGlance.id);
            const atAGlanceLabel =
              typeof atAGlance.heading?.text === "string"
                ? atAGlance.heading.text
                : "At a Glance";
            acc.push({
              id: atAGlance.id,
              label: atAGlanceLabel,
              icon: resolveNavIcon({ heading: resolved.heading }),
              order: s.order,
              type: "block",
            });
          }

          skillRows
            .filter((r) => r?.enabled !== false)
            .forEach((row, idx) => {
              if (!row.id || seen.has(row.id)) return;
              seen.add(row.id);
              const h = resolveSkillRowHeading(row);
              const labelText =
                typeof h?.text === "string" ? h.text : row.title || `Skill ${idx + 1}`;
              acc.push({
                id: row.id,
                label: labelText,
                icon: resolveNavIcon({ heading: h }),
                order: s.order,
                type: "block",
              });
            });
          return acc;
        }
      }

      // Only the dedicated Work Experience page expands into rows. Home
      // reuses this section as "workExperienceHome" and must stay a
      // single nav item.
      if (s.key === "work-items" && s.view === "workExperience") {
        const expRows = Array.isArray(apiData?.experienceAllRows)
          ? apiData.experienceAllRows
          : [];
        const resolvedRows = resolveProps(resolveProps(expRows, "experience"), "workExperience");
        const enabledRows = Array.isArray(resolvedRows)
          ? resolvedRows.filter((r) => r?.enabled !== false && r?.domain === "experience")
          : [];

        if (enabledRows.length > 0) {
          enabledRows.forEach((row, idx) => {
            if (!row.id || seen.has(row.id)) return;
            seen.add(row.id);
            const h = resolveExperienceRowHeading(row);
            const labelText =
              typeof h?.text === "string" ? h.text : `Experience ${idx + 1}`;
            acc.push({
              id: row.id,
              label: labelText,
              icon: resolveNavIcon({ heading: h }),
              order: s.order,
              type: "block",
            });
          });
          return acc;
        }
      }

      // Dedup by view so renders with different views both appear
      const navKey = s.view
        ? `${s.ref.id}-${s.view}`
        : s.ref.id;
      if (seen.has(navKey)) return acc;
      seen.add(navKey);

      // WorkItemsSection appends ${variant} to its section id
      const effectiveDomId =
        s.view &&
        VARIANT_SUFFIXED_VIEWS.has(s.view) &&
        s.variant
          ? `${s.ref.id}-${s.variant}`
          : s.ref.id;

      acc.push({
        id: effectiveDomId,
        label: resolveSectionLabel(s),
        icon: resolveWorkItemsNavIcon(s.ref, s.view),
        order: s.order,
        type: s.ref?.type || s.key,
      });

      return acc;
    }, []);

    setNavSections(navItems);

    return () => setNavSections([]);
  }, [sections, isLoading, setNavSections, apiData.experienceAllRows]);

  if (!page || !page.enabled) return null;

  return (
    <main id={page.id} className={sectionGapClasses}>
      {sections.map((sectionWrapper) => (
        <SectionRenderer
          key={`${sectionWrapper.ref.id}-${sectionWrapper.order}`}
          section={sectionWrapper.ref}
          apiData={apiData}
          view={sectionWrapper.view}
          variant={sectionWrapper.variant}
          isLoading={isLoading}
          isFilterLoading={isFilterLoading}
          mode={mode}
          size={size}
          imageid={imageid}
          ui={ui}
          handlers={handlers}
          state={state}
        />
      ))}
    </main>
  );
};

export default PageRenderer;