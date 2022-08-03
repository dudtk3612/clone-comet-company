import styled from 'styled-components';
import { Button, Input, Form } from 'antd';

export const FooterBox = styled.div`
  @media (min-width: 768px) {
    position: relative;
    background-color: white;
    height: 100%;
  }
  @media (max-width: 576px) {
    background-color: white;
    height: 100%;
  }
`;

export const FormBox = styled(Form)`
  @media (min-width: 768px) {
    padding-top: 80px;
    padding-left: 380px;
    padding-right: 380px;
  }
  @media (max-width: 576px) {
    padding-top: 80px;
    padding-left: 20px;
    padding-right: 20px;
  }

  & > span::before {
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

  & > span {
    @media (min-width: 768px) {
      text-align: center;
      padding-top: 40px;
      padding-bottom: 40px;
      line-height: 4;
      display: block;
      font-size: 14px;
      color: #812990;
      font-weight: bold;
    }
    @media (max-width: 576px) {
      text-align: center;
      padding-bottom: 40px;
      line-height: 4;
      display: block;
      font-size: 10px;
      color: #812990;
      font-weight: bold;
    }
  }

  & > div > h3 {
    @media (min-width: 768px) {
      font-family: 'PT Serif', serif;
      font-weight: bold;
      font-size: 22px;
      padding-bottom: 30px;
    }
    @media (max-width: 576px) {
      font-family: 'PT Serif', serif;
      font-weight: bold;
      font-size: 18px;
      padding-bottom: 30px;
    }
  }

  & > div > h3 > span {
    @media (min-width: 768px) {
      color: #812990;
    }
    @media (max-width: 576px) {
      color: #812990;
    }
  }

  & > div > p {
    @media (min-width: 768px) {
      font-size: 14px;
      color: gray;
    }
    @media (max-width: 576px) {
      font-size: 12px;
      color: gray;
    }
  }

  & .input-box > div {
    @media (min-width: 768px) {
      padding-top: 60px;
    }
    @media (max-width: 576px) {
      padding-top: 50px;
    }
  }
`;

export const TextInput = styled(Input.TextArea)`
  @media (min-width: 768px) {
    font-size: 14px;
    border: none;
    min-height: 12px !important;
    line-height: 12px !important;
    border-bottom: 2px solid #e2e2e2;
    resize: none;
  }
  @media (max-width: 576px) {
    border: none;
    min-height: 16px !important;
    line-height: 16px !important;
    border-bottom: 2px solid #e2e2e2;
    resize: none;
  }
`;

export const EmailInput = styled(Input)`
  @media (min-width: 768px) {
    font-size: 14px;
    border: none;
    line-height: 38px !important;
    border-bottom: 2px solid #e2e2e2;
    resize: none;
  }
  @media (max-width: 576px) {
    border: none;
    min-height: 32px !important;
    line-height: 32px !important;
    border-bottom: 2px solid #e2e2e2;
    resize: none;
  }
`;

export const MsgInput = styled(Input.TextArea)`
  @media (min-width: 768px) {
    font-size: 14px;
    border: none;
    padding-bottom: 120px;
    line-height: normal !important;
    border-bottom: 2px solid #e2e2e2;
    resize: none;
  }
  @media (max-width: 576px) {
    border: none;
    padding-bottom: 140px;
    line-height: normal !important;
    border-bottom: 2px solid #e2e2e2;
    resize: none;
  }
`;

export const BtnWrapper = styled.div`
  @media (min-width: 768px) {
    padding-top: 40px;
    padding-bottom: 160px;
  }
  @media (max-width: 576px) {
    padding-top: 15px;
    padding-bottom: 60px;
  }
`;

export const Btn = styled(Button)`
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
