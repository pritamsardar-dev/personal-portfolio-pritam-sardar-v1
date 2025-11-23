import React, { useEffect, useState } from 'react';

// Import all pre-sized Figma logs
import LogoLightSm from "../../../assets/logos/light/logo-sm.svg";
import LogoLightMd from "../../../assets/logos/light/logo-md.svg";
import LogoLightLg from "../../../assets/logos/light/logo-lg.svg";

import LogoDarkSm from "../../../assets/logos/dark/logo-sm.svg";
import LogoDarkMd from "../../../assets/logos/dark/logo-md.svg";
import LogoDarkLg from "../../../assets/logos/dark/logo-lg.svg";

// Map logos by theme and size
const logos = {
  light: {sm: LogoLightSm, md: LogoLightMd, lg: LogoLightLg},
  dark: {sm: LogoDarkSm, md: LogoDarkMd, lg: LogoDarkLg},
};

const Logo = ({theme = "light"}) => {
  const [size, setSize] = useState("lg");
  const [logoSrc, setLogoSrc] = useState(logos[theme][size]);

  // Hook to handle screen resize
  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      if(width < 640) setSize("sm");
      else if (width < 1024) setSize("md")
      else setSize("lg");
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
    }, []);

  // Hook to handle theme or size change
  useEffect(() => {
    setLogoSrc(logos[theme][size]);
  }, [theme, size]);

  return <img src={logoSrc} alt="App Logo" style={{display: "block"}} />;
};

export default Logo;