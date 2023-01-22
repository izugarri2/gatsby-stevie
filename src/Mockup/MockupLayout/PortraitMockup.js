import React from "react";
import styled from "styled-components";
import mockup2 from "./mockup2.svg";

function PortraitMockup({ children }) {
  return (
    <>
      <Wrapper>{children}</Wrapper>
    </>
  );
}

export default PortraitMockup;

const Wrapper = styled.div`
  position: relative;
  perspective: 5000;

  @media (max-width: 768px) {
    transform: scale(0.8);
    transform-origin: top left;
  }
  @media (max-width: 608px) {
    transform: scale(0.6);
    transform-origin: top left;
  }
  @media (max-width: 450px) {
    transform: scale(0.4);
  }
  @media (max-width: 330px) {
    transform: scale(0.35);
    transform-origin: top left;
  }

  div {
    transform: rotateY(-20deg) rotateX(20deg);
    transform-origin: bottom left;
  }

  * {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  :hover div {
    transform: rotateY(0deg) rotateX(0deg);
    &.mockup1 {
      transition-delay: 0s;
      transition-duration: 4s;
      transform: translate(-30px, -30px);
    }
    &.mockup2 {
      transition-delay: 0s;
      transition-duration: 3s;
      transform: translate(0, -30px);
    }
    &.mockup3 {
      transition-delay: 0s;
      transition-duration: 5s;
    }
    &.mockup4 {
      transition-delay: 0s;
      transition-duration: 3s;
      transform: translate(-120px, 30px);
    }
    &.mockup5 {
      transition-delay: 0s;
      transition-duration: 5s;
      transform: translate(-50px, 20px);
    }
    :hover {
      filter: brightness(150%) saturate(120%);
    }
  }

  .mockup1 {
    position: absolute;
    width: 183px;
    height: 120px;
    left: 160px;
    top: 0px;

    background: url("./animations/mockup1.svg"),
      radial-gradient(
        218.51% 281.09% at 100% 100%,
        rgba(253, 63, 51, 0.6) 0%,
        rgba(76, 0, 200, 0.6) 45.83%,
        rgba(76, 0, 200, 0.6) 100%
      );
    box-shadow: 0px 16.3881px 32.7761px rgba(99, 30, 187, 0.5),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(21.8507px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 16px;
  }
  .mockup2 {
    position: absolute;
    width: 183px;
    height: 120px;
    left: 360px;
    top: 0px;

    background-image: ${(props) => props.inputCoucou};

    box-shadow: 0px 8.19119px 16.3824px rgba(0, 0, 0, 0.1),
      0px 16.3824px 32.7648px rgba(0, 0, 0, 0.15),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(21.8432px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 16px;
  }
  .mockup3 {
    position: absolute;
    width: 701px;
    height: 428px;
    left: 37px;
    top: 0px;

    background: url("./animations/mockup3.svg"), rgba(23, 12, 61, 0.5);
    box-shadow: inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(20px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 8px;
  }
  .mockup4 {
    position: absolute;
    width: 399px;
    height: 274px;
    left: 134px;
    top: 202px;

    background: url("./animations/mockup4.svg"), rgba(39, 20, 62, 0.3);
    box-shadow: 0px 8.19119px 16.3824px rgba(0, 0, 0, 0.1),
      0px 16.3824px 32.7648px rgba(0, 0, 0, 0.15),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    //box-shadow: inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(20px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 8px;
  }
  .mockup5 {
    position: absolute;
    width: 379px;
    height: 274px;
    left: 500px;
    top: 202px;

    background: url("./animations/mockup5.png"), rgba(39, 20, 62, 0.2);
    box-shadow: 0px 8.19119px 16.3824px rgba(0, 0, 0, 0.1),
      0px 16.3824px 32.7648px rgba(0, 0, 0, 0.15),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    //box-shadow: inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(20px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 8px;

    @media (orientation: portrait) {
      /* transform: translate(-100px, 300px); */
      left: 100px;
      top: 502px;
    }

    @media (orientation: portrait) {
    }
  }
`;
