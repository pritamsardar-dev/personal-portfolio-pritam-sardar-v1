import { useEffect, useState } from "react";

import { getPageBySlug } from "../../api/page.api";

import { skillsPageLoadingStructure } from "../../loading/pageLoadingStructures/skillsPageLoading.structure";

import PageRenderer from "../../renderers/pages/PageRenderer";

const SkillsPageContainer = () => {
  const [apiData, setApiData] = useState({
    page: null,
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const pageRes = await getPageBySlug("skills");

        setApiData({
          page: pageRes.data,
        });
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPage();
  }, []);

  return (
    <PageRenderer
      data={
        isLoading || !apiData.page
          ? {
            page: skillsPageLoadingStructure,
          }
          : apiData
      }
      isLoading={isLoading}
    />
  );
};

export default SkillsPageContainer;
