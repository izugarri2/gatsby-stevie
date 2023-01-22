import React from "react";
import styled, { keyframes } from "styled-components";
import MockupDisplay from "./Mockup/MockupDisplay";

function HeroSection() {
  return (
    <div>
      <ContentWrapper>
        <MockupDisplay />
      </ContentWrapper>
    </div>
  );
}

export default HeroSection;

const animation = keyframes`
0% { opacity: 0; transform: translateY(-10px); filter: blur(10px); }
  100% { opacity: 1; transform: translateY(0px); filter: blur(0px); }
`;

const ContentWrapper = styled.div`
  /* max-width: 1234px; */
  margin: 0 auto;
  padding: 100px 30px;
  display: grid;
  grid-template-columns: 360px auto;

  @media (max-width: 450px) {
    grid-template-columns: auto;
    gap: 60px;
    padding: 150px 20px 250px;
  }
`;
