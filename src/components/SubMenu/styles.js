import styled, { keyframes } from 'styled-components';

const slideMenuUpDown = keyframes`
  0% {
    transform: translateY(-100%);
  }

  100% {
    transform: translateY(0);
  }
`;

const slideUnderline = keyframes`
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
`;

export const SubMenuWrapper = styled.div`
  @media (max-width: 576px) {
    z-index: 1;
    width: 100%;
    position: fixed;
    background-color: white;
    animation: ${slideMenuUpDown} 0.3s linear both;
    transition: all 0.3s ease;
    box-shadow: rgba(100, 100, 100, 0.6) 0px 0px 6px 0px;
  }

  & > .SubMenu {
    @media (max-width: 576px) {
      padding: 15px 30px;
      font-size: 12px;
      font-weight: bold;
    }
  }

  & a {
    @media (max-width: 576px) {
      color: black;
      position: relative;
      width: 100%;
    }
  }

  & a::after {
    @media (max-width: 576px) {
      position: absolute;
      display: none;
      width: 100%;
      content: '';
      height: 2px;
      background-color: #812990;
    }
  }

  & a:hover::after {
    @media (max-width: 576px) {
      display: block;
      animation: ${slideUnderline} 0.3s linear;
    }
  }
`;
