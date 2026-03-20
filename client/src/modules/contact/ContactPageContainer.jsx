import { useState } from "react";
import PageRenderer from "../../renderers/pages/PageRenderer";
import { contactPage } from "../../data/pages/contactPage";


const ContactPageContainer = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlers = {
    form: {
      contactSubmit: async (data) => {
        try {
          setIsSubmitting(true); // ✅ Start loader
          console.log("🔥 Form Data:", data);

          // Simulate API delay (for testing UX)
          await new Promise((res) => setTimeout(res, 5000));

          console.log("✅ Form submitted successfully");

        } catch (err) {
          console.error("❌ Submission error:", err);
        } finally {
          setIsSubmitting(false); // ✅ Stop loader
        }
      },
    }
  };

  return (
    <PageRenderer
      data={contactPage}
      handlers={handlers}
      state={{form: {contactSubmit: isSubmitting}}}
    />
  );
};

export default ContactPageContainer;