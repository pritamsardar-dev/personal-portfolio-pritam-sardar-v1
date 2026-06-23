import { useEffect, useState } from "react";

import { getPageBySlug } from "../../api/page.api";
import { getExperienceAllRows } from "../../api/workItems.api";

import { workExperiencePageLoadingStructure } from "../../loading/pageLoadingStructures/workExperiencePageLoading.structure";

import PageRenderer from "../../renderers/pages/PageRenderer";

const WorkExperiencePageContainer = () => {
  const [apiData, setApiData] = useState({
    page: null,

    experienceAllRows: [],
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const [pageRes, experienceAllRowsRes] = await Promise.all([
          getPageBySlug("work-experience"),
          getExperienceAllRows(),
        ]);

        setApiData({
          page: pageRes.data,

          experienceAllRows: experienceAllRowsRes?.data || [],
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
            page: workExperiencePageLoadingStructure,
          }
          : apiData
      }
      isLoading={isLoading}
    />
  );
};

export default WorkExperiencePageContainer;
