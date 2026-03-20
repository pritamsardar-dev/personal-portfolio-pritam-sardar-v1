import ModalProvider from "./providers/ModalProvider";
import RefsProvider from "./providers/RefsProvider";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import PageRenderer from "./renderers/pages/PageRenderer";
import { homePage } from "./data/pages/homePage";
import { aboutPage } from "./data/pages/aboutPage";
import { workExperiencePage } from "./data/pages/workExperiencePage";
import { skillsPage } from "./data/pages/skillsPage";
import { projectsPage } from "./data/pages/projectsPage";
import { caseStudiesPage } from "./data/pages/caseStudiesPage";
import { fullCaseStudyPage } from "./data/pages/fullCaseStudyPage";
import { viewDetailsPage } from "./data/pages/viewDetailsPage";
import ContactPageContainer from "./modules/contact/ContactPageContainer";

function App() {
  return (
    <RefsProvider>
      <ModalProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route
              path="/"
              element={<PageRenderer data={homePage} />}
            />
          </Route>

          <Route element={<Layout />}>
            <Route
              path="/about"
              element={<PageRenderer data={aboutPage} />}
            />
          </Route>

          <Route element={<Layout />}>
            <Route
              path="/work-experience"
              element={<PageRenderer data={workExperiencePage} />}
            />
          </Route>

          <Route element={<Layout />}>
            <Route
              path="/skills"
              element={<PageRenderer data={skillsPage} />}
            />
          </Route>

          <Route element={<Layout />}>
            <Route
              path="/projects"
              element={<PageRenderer data={projectsPage} />}
            />
          </Route>

          <Route element={<Layout />}>
            <Route
              path="/case-studies"
              element={<PageRenderer data={caseStudiesPage} />}
            />
          </Route>

          <Route element={<Layout />}>
            <Route
              path="/contact"
              element={<ContactPageContainer  />}
            />
          </Route>

          {/* Dynamic Routes */}
          <Route element={<Layout />}>
            <Route
              path="/full-case-study/:fullscreenRowId"
              element={<PageRenderer data={fullCaseStudyPage}/>}
            />
          </Route>

          <Route element={<Layout />}>
            <Route
              path="/view-details/:fullscreenRowId"
              element={<PageRenderer data={viewDetailsPage}/>}
            />
          </Route>

          {/* Optional 404 */}
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </ModalProvider>
    </RefsProvider>
  );
}

export default App;