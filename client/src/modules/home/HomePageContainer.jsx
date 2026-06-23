import { useEffect, useState } from "react";

import { getPageBySlug } from "../../api/page.api";
import {
  getExperienceFeaturedRows,
  getProjectFeaturedRows,
  getPaginatedWorkItemsRows,
  getWorkItemRowByIdWithRelatedRows,
} from "../../api/workItems.api";

import { homePageLoadingStructure } from "../../loading/pageLoadingStructures/homePageLoading.structure";

import PageRenderer from "../../renderers/pages/PageRenderer";

const HomePageContainer = () => {
  const [apiData, setApiData] = useState({
    page: null,

    experienceFeaturedRows: [],
    featuredWorkItems: [],
    projectFeaturedRows: [],
    paginatedWorkItemsRows: {
      data: [],
      pagination: {},
    },

    workItemRowByIdWithRelatedRows: {
      current: null,
      related: [],
    },
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const [
          pageRes,
          featuredExperienceRowsRes,
          projectFeaturedRowsRes,
          paginatedWorkItemsRowsRes,
          workItemRowByIdWithRelatedRowsRes,
        ] = await Promise.all([
          getPageBySlug("home"),
          getExperienceFeaturedRows(1),
          getProjectFeaturedRows(4),
          getPaginatedWorkItemsRows({
            page: 1,
            limit: 6,
            scope: "all",
            primary: "all",
            secondary: [],
            sort: "top",
          }),
          getWorkItemRowByIdWithRelatedRows("sample-row-id", false),
        ]);

        setApiData({
          page: pageRes.data,

          experienceFeaturedRows: featuredExperienceRowsRes.data || [],

          featuredWorkItems: projectFeaturedRowsRes?.data || [],

          projectFeaturedRows: projectFeaturedRowsRes?.data || [],

          paginatedWorkItemsRows: {
            data: paginatedWorkItemsRowsRes?.data || [],
            pagination: paginatedWorkItemsRowsRes?.pagination || {},
          },

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
  }, []);

  return (
    <PageRenderer
      data={
        isLoading || !apiData.page
          ? {
            page: homePageLoadingStructure,
          }
          : apiData
      }
      isLoading={isLoading}
    />
  );
};

export default HomePageContainer;
