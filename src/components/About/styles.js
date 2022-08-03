import styled from 'styled-components';

export const AboutBox = styled.div`
  @media (min-width: 768px) {
    height: 100vh;
    text-align: center;
  }
  @media (max-width: 576px) {
    text-align: center;
    height: 100vh;
  }

  & > .content-top {
    @media (min-width: 768px) {
      background-color: #f8f8f8;
      height: 50%;
    }
    @media (max-width: 576px) {
      background-color: #f8f8f8;
      height: 45%;
    }
  }

  & > .content-top > span::before {
    @media (min-width: 768px) {
      display: block;
      margin: 0 auto;
      content: '';
      height: 2px;
      width: 20px;
      background-color: #812990;
    }
    @media (max-width: 576px) {
      display: block;
      margin: 0 auto;
      content: '';
      height: 2px;
      width: 20px;
      background-color: #812990;
    }
  }

  & > .content-top > span {
    @media (min-width: 768px) {
      line-height: 4;
      display: block;
      padding-top: 120px;
      padding-bottom: 10px;
      font-size: 14px;
      color: #812990;
      font-weight: bold;
    }
    @media (max-width: 576px) {
      line-height: 4;
      display: block;
      padding-top: 80px;
      padding-bottom: 10px;
      font-size: 10px;
      color: #812990;
      font-weight: bold;
    }
  }

  & > .content-top > div {
    @media (min-width: 768px) {
      width: 100%;
      font-size: 42px;
      font-weight: 500;
      padding-left: 650px;
      padding-right: 650px;
      padding-bottom: 50px;
      line-height: 1;
    }
    @media (max-width: 576px) {
      font-size: 28px;
      font-weight: 500;
      padding-left: 20px;
      padding-right: 20px;
      padding-bottom: 40px;
    }
  }

  & > .content-top > p {
    @media (min-width: 768px) {
      color: gray;
      font-size: 16px;
    }
    @media (max-width: 576px) {
      color: gray;
      font-size: 12px;
    }
  }

  & > .content-bottom {
    @media (min-width: 768px) {
      position: relative;
      height: 50%;
      background-color: #e8edf9;
      background-image: url(${process.env.PUBLIC_URL +
      'images/bg_section2.png'});
      background-size: cover;
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-position: center 240px;
    }
    @media (max-width: 576px) {
      height: 55%;
      background-color: #e8edf9;
    }
  }

  & > .content-bottom > div {
    @media (min-width: 768px) {
      position: absolute;
      width: 100%;
      height: 100%;
      padding-left: 30px;
      padding-right: 30px;

      display: flex;
      flex-direction: column;
      position: absolute;
      justify-content: center;
      align-items: center;
      font-size: 30px;
      line-height: 1;

      font-family: 'PT Serif', serif;
    }

    @media (max-width: 576px) {
      padding-left: 30px;
      padding-right: 30px;
      display: flex;
      flex-direction: column;
      position: relative;
      height: 100%;
      justify-content: center;
      align-items: center;
      font-size: 1.5rem;
      line-height: 1;

      font-family: 'PT Serif', serif;
    }
  }

  & .bottom-text-top {
    @media (max-width: 576px) {
      padding-bottom: 20px;
    }
  }

  & .bottom-text-top::before {
    @media (min-width: 768px) {
      content: '"';
      font-weight: bold;
      font-size: 40px;
    }
    @media (max-width: 576px) {
      content: '"';
      font-weight: bold;
      font-size: 2rem;
    }
  }

  & .bottom-text-top::after {
    @media (min-width: 768px) {
      content: '"';
      font-weight: bold;
      font-size: 40px;
    }
    @media (max-width: 576px) {
      content: '"';
      font-weight: bold;
      font-size: 2rem;
    }
  }

  & .bottom-text-bottom {
    @media (min-width: 768px) {
      padding-top: 40px;
      font-size: 16px;
      font-family: 'Open Sans';
      color: #812990;
    }
    @media (max-width: 576px) {
      font-size: 12px;
      font-family: 'Open Sans';
      color: #812990;
    }
  }
`;
