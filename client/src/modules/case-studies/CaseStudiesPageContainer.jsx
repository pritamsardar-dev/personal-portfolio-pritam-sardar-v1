import { useEffect, useState } from "react";

import { useFiltersPagination } from "../../hooks/useFiltersPagination";

import { getPageBySlug } from "../../api/page.api";
import { getPaginatedWorkItemsRows } from "../../api/workItems.api";

import { caseStudiesPageLoadingStructure } from "../../loading/pageLoadingStructures/caseStudiesPageLoading.structure";

import PageRenderer from "../../renderers/pages/PageRenderer";

const CaseStudiesPageContainer = () => {
  const { page, filters } = useFiltersPagination({
    scope: "all",
    primary: "all",
    secondary: [],
    sort: "top",
  });

  const [apiData, setApiData] = useState({
    page: null,

    paginatedWorkItemsRows: {
      data: [],
      pagination: {},
    },
  });

  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [isFilterLoading, setIsFilterLoading] = useState(false);

  const secondaryKey = filters.secondary.join(",");

  // Fetches CMS page data on mount
  useEffect(() => {
    const fetchPage = async () => {
      try {
        const pageRes = await getPageBySlug("case-studies");

        setApiData((prev) => ({
          ...prev,
          page: pageRes.data,
        }));
      } catch (error) {
        console.error(error);
      } finally {
        setIsInitialLoading(false);
      }
    };

    fetchPage();
  }, []);

  // Fetches paginated work item rows when filters or page changes
  useEffect(() => {
    const fetchRows = async () => {
      try {
        setIsFilterLoading(true);

        const paginatedWorkItemsRowsRes = await getPaginatedWorkItemsRows({
          page,
          limit: 4,
          scope: filters.scope,
          primary: filters.primary,
          secondary: filters.secondary,
          sort: filters.sort,
        });

        setApiData((prev) => ({
          ...prev,

          paginatedWorkItemsRows: {
            data: paginatedWorkItemsRowsRes?.data || [],
            pagination: paginatedWorkItemsRowsRes?.pagination || {},
          },
        }));
      } catch (error) {
        console.error(error);
      } finally {
        setIsFilterLoading(false);
      }
    };

    fetchRows();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.primary, filters.scope, secondaryKey, filters.sort, page]);

  return (
    <PageRenderer
      data={
        isInitialLoading || !apiData.page
          ? {
            page: caseStudiesPageLoadingStructure,
          }
          : apiData
      }
      isLoading={isInitialLoading}
      isFilterLoading={isFilterLoading}
    />
  );
};

export default CaseStudiesPageContainer;
