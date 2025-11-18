# 1. Planning Phase

---

## 1.1 Define Project Goal

- Create a scroll-based, node-driven homepage layout (each node links to a section).
- Highlight the active section using visual effects (e.g., edge flame animation).
- Two primary CTAs:
  - View Projects → Scroll to Projects section.
  - Download CV → Opens/downloads PDF resume.
- Project cards:
  - Display minimal info: title, role, tech.
  - On hover: autoplay preview (GIF/video) with fullscreen option.
- Each project will have a dedicated page with:
  - Full description, tech breakdown, demo, screenshots, and docs.
- Tailored for recruiters visiting via LinkedIn/resume links for faster content access.

---

## 1.2 Page Structure Confirmation

- **Home Page**  
  Hero section with name, title, and CTA. Scroll-driven sections (About, Skills, Projects, Contact).

- **About Page**  
  Short bio, timeline (education, experience, achievements).

- **Projects Page**  
  Project cards grid/list. Hover preview + links to full project pages.

- **Individual Project Page**  
  Detailed breakdown of each project with demo, tech, features, docs.

- **Skills Page**  
  Tech skill icons or proficiency charts. Optional soft skills.

- **Contact Page**  
  Simple form + social/contact links (GitHub, LinkedIn, Email).

- **404 Page**  
  Fallback page with a navigation link.

---

## 1.3 Decide on Theme Toggle (Dark/Light)

- Add toggle button in the header (e.g., sun/moon icon).
- Use `localStorage` to remember user preference.
- Tailwind CSS dark mode using `class` strategy.
- Ensure visual consistency, contrast, and accessibility.
- Smooth transition animations between themes.

---

## 1.4 Identify Reusable Components

- `Header`: Branding, nav links, theme toggle  
- `Footer`: Social links, copyright  
- `Button`: Primary/secondary CTA  
- `ProjectCard`: Compact hoverable card with media preview  
- `SectionWrapper`: Reusable container with padding/margin and fade-in  
- `TechIcon`: For displaying skills  
- `PageLayout`: Consistent layout wrapper

---

## 1.5 Finalize Tech Stack

- **React**: Component-based UI  
- **Tailwind CSS**: Utility-first styling  
- **React Router**: Client-side routing  
- **Framer Motion**: Animation library  
- **Vercel**: Hosting + deployment  
- **Git/GitHub**: Version control  
- **Figma**: UI design and wireframing  
- **(Optional)** Cloudinary for media in future

---

# 2. Design Phase (Estimated: 8–10 hours)

---

## 2.1 Design Research & Setup

- **Figma Project Setup**
  - Set up a well-organized Figma file with the following structure:
    - **First Frame**: Design System — includes colors, typography, spacing, buttons, inputs, etc.
    - **Second Frame**: Full Homepage for Desktop, Tablet, and Mobile views.
    - Each component will support a **Dark Mode toggle system** for better accessibility and modern UI.
    - **Next Page**: Three design versions (iterations) placed side-by-side for comparison.
  
- **Hero Section Layout**
  - Follows a classic structure for clarity and impact:
    - **Left Side**: Hero heading, description, and a clear call-to-action (CTA).
    - **Right Side**: Illustrative or expressive image to support the message.
  - Visual style:
    - Light Mode: Clean look with **soft gradients** for elegance.
    - Dark Mode: Depth created through **gradient-based dark background**.

- **UI/UX Direction**
  - Focus on creating a clean, sleek, and creative experience.
  - Layout follows a **node-based walkthrough**:
    - Each section is visually tied to a vertical navigation node.
    - Helps users **easily navigate** through all sections via smooth scrolling cues.
  - Enhances **user engagement** with structured, scroll-driven flow.

- **Projects Section (Recruiter Focused)**
  - This is the **most critical section** to showcase value to recruiters.
  - Each project card will:
    - Include a **hover-based auto-play** or live demo preview.
    - Clearly mention tech stack and role (solo/team).
    - Be designed for **quick scanning and strong visual impact**.
  - Fillers:
    - Include a few **filler projects or elements** related to software development to keep the layout balanced and professional-looking.

---

## 2.1 Set up Grid & Design System

- Define grid: 12-col (desktop), 8-col (tablet), 4-col (mobile)  
- Create spacing, color palette, typography system  
- Build atomic UI components (buttons, cards, inputs, etc.)  
- Apply Figma styles for text, spacing, color  
- All pages/components will inherit from this system

---

## 2.2 Design: Homepage

- Node-based layout connecting sections  
- Design all breakpoints side-by-side  
- Visual cue for active section  
- Dual CTA buttons with animation or highlight

---

## 2.3 Design: Projects Page

- Project cards: image + short info  
- Hover = preview demo  
- Allow fullscreen view of demo  
- Consistent grid system across breakpoints

---

## 2.4 Design: Individual Project Page

- Page structure: title, description, features, stack, media  
- Visual hierarchy and layout for easy reading  
- Add supporting documentation if available

---

## 2.5 Design: About Section

- Compact bio  
- Visual timeline for career  
- Optional scroll-based animation

---

## 2.6 Design: Contact Section

- Minimal form with 3 fields  
- Add links to GitHub, LinkedIn, Email  
- Optional: email copy feature

---

## 2.7 Dark Mode Variants

- Build dark version for every component  
- Use Figma variants  
- Match contrast and readability standards

---

# 3. Development Phase

---

## 3.1 Setup

- Initialize Vite project  
- Install Tailwind CSS  
- Configure React Router  
- Prepare file structure  

## 3.2 Core Development

- Add layout wrapper  
- Build reusable components  
- Add dark/light toggle using `localStorage`

## 3.3 Pages

- Home: Hero + featured projects  
- About: Bio and timeline  
- Projects: Project cards  
- Skills: Icons or charts  
- Contact: Form + links

## 3.4 Enhancements

- Animations using Framer Motion (optional)  
- Ensure responsive design across devices  

---

# 4. Deployment Phase

---

## 4.1 Code & Hosting

- Push to GitHub  
- Deploy to Vercel  

## 4.2 Domain & Final Testing

- Connect custom domain (optional)  
- Test dark/light toggle  
- Mobile & desktop responsiveness  
- Validate all routes and links  

---
