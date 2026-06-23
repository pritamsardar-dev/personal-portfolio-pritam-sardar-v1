import { useEffect, useState } from "react";

import { getFooter } from "../../api/global.api";

import Footer from "../../components/organisms/footer-section/Footer";

const FooterContainer = (props) => {
  const [footerData, setFooterData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadFooter = async () => {
      try {
        setIsLoading(true);

        const res = await getFooter();

        setFooterData(res?.data || null);
      } catch (error) {
        console.error("Failed to load footer:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadFooter();
  }, []);

  return <Footer {...props} data={footerData} isLoading={isLoading} />;
};

export default FooterContainer;
