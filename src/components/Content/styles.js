import styled, { createGlobalStyle } from 'styled-components';
import { Button } from 'antd';

export const Global = createGlobalStyle`
  .ant-btn:hover, .ant-btn:focus {
    @media (min-width: 768px) {
      background-color: #F5F6FF;
      border: 4px solid #812990;
      color: #812990;
    }
    @media (max-width: 576px) {
      background-color: #F5F6FF;
      border: 2px solid #812990;
      color: #812990;
    }
    
  }
`;

export const ContentBox = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    align-items: center;
    font-size: 50px;
    font-weight: bold;
  }
  @media (max-width: 576px) {
    height: 100vh;
  }

  & > div:first-child {
    @media (max-width: 576px) {
      padding-left: 15px;
      padding-right: 15px;
      padding-top: 40px;
      padding-bottom: 50px;
      font-size: 50px;
      text-align: center;
      font-weight: bold;
      line-height: 1.2;
    }
  }
`;

export const BtnWrapper = styled.div`
  @media (min-width: 768px) {
    padding-top: 50px;
  }
  @media (max-width: 576px) {
    text-align: center;
  }
`;

export const MobileBtn = styled(Button)`
  @media (min-width: 768px) {
    display: none;
    background-color: #812990;
    color: white;
    padding-top: 50px;
    padding-bottom: 50px;
    padding-left: 100px;
    padding-right: 100px;
    font-size: 24px;
    line-height: 0;
    font-weight: bold;
  }
  @media (max-width: 576px) {
    background-color: #812990;
    color: white;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 30px;
    padding-right: 30px;
    font-size: 11px;
    line-height: 0;
    font-weight: bold;
  }
`;

export const PcBtn = styled(Button)`
  @media (min-width: 768px) {
    background-color: #812990;
    color: white;
    padding-top: 24px;
    padding-bottom: 24px;
    padding-left: 40px;
    padding-right: 40px;
    font-size: 12px;
    line-height: 0;
    font-weight: bold;
  }
  @media (max-width: 576px) {
    display: none;
    background-color: #812990;
    color: white;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 30px;
    padding-right: 30px;
    font-size: 11px;
    line-height: 0;
    font-weight: bold;
  }
`;
