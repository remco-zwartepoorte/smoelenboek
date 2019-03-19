import React from 'react';
import styled from 'styled-components';

export default function Background() {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      viewBox="0 0 414 275"
    >
      <polygon className="polygon--fill" points="0,0 404,10 414,265 0,275" />
    </StyledSvg>
  );
}

const StyledSvg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;

  .polygon--fill {
    fill: white;
  }
`;
