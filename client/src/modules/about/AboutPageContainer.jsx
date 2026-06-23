import { useEffect, useState } from "react";

import { getPageBySlug } from "../../api/page.api";

import { aboutPageLoadingStructure } from "../../loading/pageLoadingStructures/aboutPageLoading.structure";

import PageRenderer from "../../renderers/pages/PageRenderer";

const AboutPageContainer = () => {
  const [apiData, setApiData] = useState({
    page: null,
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const pageRes = await getPageBySlug("about");

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
            page: aboutPageLoadingStructure,
          }
          : apiData
      }
      isLoading={isLoading}
    />
  );
};

export default AboutPageContainer;
