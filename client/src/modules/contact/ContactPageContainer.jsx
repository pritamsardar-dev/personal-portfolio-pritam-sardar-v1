import { useEffect, useState } from "react";

import { getPageBySlug } from "../../api/page.api";
import { createMessage } from "../../api/message.api";

import { usePopupMessage } from "../../hooks/usePopupMessage";

import { contactPageLoadingStructure } from "../../loading/pageLoadingStructures/contactPageLoading.structure";

import PageRenderer from "../../renderers/pages/PageRenderer";

const ContactPageContainer = () => {
  const [apiData, setApiData] = useState({ page: null });
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { showMessage } = usePopupMessage();

  const handlers = {
    form: {
      contactSubmit: async (data) => {
        try {
          setIsSubmitting(true);

          const res = await createMessage(data);

          showMessage({
            role: "success",
            title: "Message Received",
            message:
              res.message ??
              "Message received successfully. If the email is reachable, I will get back shortly. Thank you for your message.",
            variant: "success",
            autoCloseMs: 10000,
          });

          return true;
        } catch (err) {
          const status = err?.response?.status;
          const message = err?.response?.data?.message;

          // Rate limit exceeded (spam protection)
          if (status === 429) {
            showMessage({
              role: "error",
              title: "Message Limit Reached",
              message:
                message ??
                "To prevent spam, messages can only be sent up to 3 times per 24 hours. Please try again later.",
              variant: "error",
              autoCloseMs: 10000,
            });

            // Validation error
          } else if (status === 400) {
            showMessage({
              role: "error",
              title: "Invalid Details",
              message:
                message ??
                "Please review the provided details and ensure all required fields are correctly filled before submitting again.",
              variant: "error",
              autoCloseMs: 5000,
            });

            // Server or unexpected error
          } else {
            showMessage({
              role: "error",
              title: "Submission Failed",
              message:
                "We were unable to process the request at this time. Please try again later.",
              variant: "error",
              autoCloseMs: 5000,
            });
          }

          console.error("[ContactPageContainer] Submission error:", err);

          return false;
        } finally {
          setIsSubmitting(false);
        }
      },
    },
  };

  // Fetches CMS page data on mount
  useEffect(() => {
    const fetchPage = async () => {
      try {
        const pageRes = await getPageBySlug("contact");

        setApiData({ page: pageRes.data });
      } catch (error) {
        console.error("[ContactPageContainer] Page fetch error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPage();
  }, []);

  return (
    <PageRenderer
      data={isLoading || !apiData.page ? { page: contactPageLoadingStructure } : apiData}
      handlers={handlers}
      state={{
        form: {
          contactSubmit: isSubmitting,
        },
      }}
      isLoading={isLoading}
    />
  );
};

export default ContactPageContainer;
