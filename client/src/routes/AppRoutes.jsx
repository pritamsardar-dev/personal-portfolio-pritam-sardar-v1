import { Routes, Route } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";

import AdminLoginContainer from "../modules/auth/AdminLoginContainer";
import HomePageContainer from "../modules/home/HomePageContainer";
import AboutPageContainer from "../modules/about/AboutPageContainer";
import WorkExperiencePageContainer from "../modules/work-experience/WorkExperiencePageContainer";
import SkillsPageContainer from "../modules/skills/SkillsPageContainer";
import ProjectsPageContainer from "../modules/projects/ProjectsPageContainer";
import CaseStudiesPageContainer from "../modules/case-studies/CaseStudiesPageContainer";
import ContactPageContainer from "../modules/contact/ContactPageContainer";
import ViewDetailsPageContainer from "../modules/view-details/ViewDetailsPageContainer";
import FullCaseStudyPageContainer from "../modules/full-case-study/fullCaseStudyPageContainer";
import ContactInboxContainer from "../modules/contact-inbox/ContactInboxContainer";

import Layout from "../layout/Layout";
import ProtectedRoute from "./ProtectedRoute";
import NotFoundPage from "../components/pages/NotFoundPage";

const AppRoutes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePageContainer />} />
        <Route path="/about" element={<AboutPageContainer />} />
        <Route path="/work-experience" element={<WorkExperiencePageContainer />} />
        <Route path="/skills" element={<SkillsPageContainer />} />
        <Route path="/projects" element={<ProjectsPageContainer />} />
        <Route path="/case-studies" element={<CaseStudiesPageContainer />} />
        <Route path="/contact" element={<ContactPageContainer />} />

        {/* Dynamic Routes */}
        <Route path="/full-case-study/:fullscreenRowId" element={<FullCaseStudyPageContainer />} />
        <Route path="/view-details/:fullscreenRowId" element={<ViewDetailsPageContainer />} />

        {/* Admin Inbox */}
        <Route
          path="/admin/inbox"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <ContactInboxContainer />
            </ProtectedRoute>
          }
        />
      </Route>

      {/* Admin Login */}
      <Route path="/admin" element={<AdminLoginContainer />} />

      {/* 404 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
