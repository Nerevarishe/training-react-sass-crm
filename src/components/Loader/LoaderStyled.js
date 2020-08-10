import styled, { keyframes } from "styled-components";

const animation = keyframes`
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
`;

const LoaderStyled = styled.div`
  color: #ffffff;
  font-size: 10px;
  margin: 80px auto;
  position: fixed;
  width: 100vw;
  height: 100vh;
  text-indent: -9999em;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  animation-fill-mode: both;
  animation: ${animation} 1.8s infinite ease-in-out;
  :before,
  :after {
    border-radius: 50%;
    width: 2.5em;
    height: 2.5em;
    animation-fill-mode: both;
    animation: ${animation} 1.8s infinite ease-in-out;
    content: "";
    position: absolute;
    top: 0;
  }
  :before {
    left: -3.5em;
    animation-delay: -0.32s;
  }
  :after {
    left: 3.5em;
  }
`;

export default LoaderStyled;
