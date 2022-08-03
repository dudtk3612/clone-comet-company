import styled, { keyframes } from 'styled-components';

const slideUnderline = keyframes`
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
`;

export const SubMenuPcWrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    margin-right: 100px;

    & .SubMenuPc {
      margin-left: 40px;
      margin-right: 40px;
    }

    .aTag {
      position: relative;
      width: 100%;
      color: black;
      font-weight: 600;
      font-size: 12px;
    }

    & .SubMenuPc a:hover {
      color: #812990;
    }

    & .SubMenuPc a::after {
      position: absolute;
      display: none;
      width: 100%;
      content: '';
      height: 3px;
      background-color: #812990;
    }

    & .SubMenuPc a:hover::after {
      display: block;
      animation: ${slideUnderline} 0.3s linear;
    }

    & .aTagCurrHome {
      position: relative;
      width: 100%;
      color: #812990;
      padding-bottom: 3px;
      border-bottom: 3px solid #812990;
    }

    & .aTagCurrAbout {
      position: relative;
      width: 100%;
      color: #812990;
      padding-bottom: 3px;
      border-bottom: 3px solid #812990;
    }

    & .aTagCurrContactUs {
      position: relative;
      width: 100%;
      color: #812990;
      padding-bottom: 3px;
      border-bottom: 3px solid #812990;
    }
  }

  @media (max-width: 576px) {
    display: none;
  }
`;
