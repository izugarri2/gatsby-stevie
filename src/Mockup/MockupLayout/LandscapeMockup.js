import React from "react";
import styled from "styled-components";
import mockup2 from "./mockup2.svg";

function LandscapeMockup({ children }) {
  return (
    <>
      <Wrapper src={mockup2} />
    </>
  );
}

export default LandscapeMockup;

const Wrapper = styled.img`
  position: absolute;
  width: 183px;
  height: 120px;
  left: 360px;
  top: 0px;
`;
