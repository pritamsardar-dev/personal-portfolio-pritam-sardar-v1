import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { getPageBySlug } from "../../api/page.api";
import { getWorkItemRowByIdWithRelatedRows } from "../../api/workItems.api";

import { fullCaseStudyPageLoadingStructure } from "../../loading/pageLoadingStructures/fullCaseStudyPageLoading.structure";

import PageRenderer from "../../renderers/pages/PageRenderer";

const FullCaseStudyPageContainer = () => {
  const { fullscreenRowId } = useParams();

  const [apiData, setApiData] = useState({
    page: null,

    workItemRowByIdWithRelatedRows: {
      current: null,
      related: [],
    },
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const [pageRes, workItemRowByIdWithRelatedRowsRes] = await Promise.all([
          getPageBySlug("view-details"),
          getWorkItemRowByIdWithRelatedRows(fullscreenRowId, true),
        ]);

        setApiData({
          page: pageRes.data,

          workItemRowByIdWithRelatedRows: {
            current: workItemRowByIdWithRelatedRowsRes?.current || null,
            related: workItemRowByIdWithRelatedRowsRes?.related || [],
          },
        });
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPage();
  }, [fullscreenRowId]);

  return (
    <PageRenderer
      data={
        isLoading || !apiData.page
          ? {
            page: fullCaseStudyPageLoadingStructure,
          }
          : apiData
      }
      isLoading={isLoading}
    />
  );
};

export default FullCaseStudyPageContainer;
