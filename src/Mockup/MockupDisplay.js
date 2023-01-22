import React from "react";
import { useEffect, useState } from "react";

import { useWindowSize } from "./screenDimensions/useWindowSize";
import useScreenOrientation from "./screenDimensions/useScreenOrientation";

import PortraitMockup from "./MockupLayout/PortraitMockup";
import LandscapeMockup from "./MockupLayout/LandscapeMockup";

function landscapeMode() {
  return (
    <LandscapeMockup>
      <div className="mockup2" />
    </LandscapeMockup>
  );
}

function portraitMode() {
  return (
    <PortraitMockup>
      <div className="mockup2" />
      <div className="mockup1" />
      <div className="mockup5" />
      <div className="mockup4" />
    </PortraitMockup>
  );
}

export default function MockupDisplay() {
  const screen = useScreenOrientation();

  const { width } = useWindowSize();
  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    setIsPortrait(width > 500);
  }, [width]);

  return isPortrait ? landscapeMode() : portraitMode();
}
