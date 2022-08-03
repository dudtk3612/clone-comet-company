import styled from 'styled-components';
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';

export const NavWrapper = styled.nav`
  @media (min-width: 768px) {
    top: 0;
    z-index: 1000;
    position: sticky;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  @media (max-width: 576px) {
    top: 0;
    position: sticky;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: white;
    z-index: 2;
    box-shadow: ${(props) =>
      props.showMenu ? 'none' : 'rgba(100, 100, 100, 0.6) 0px 0px 6px 0px'};
  }
`;

export const LogoWrapper = styled.div`
  @media (min-width: 768px) {
    margin-left: 200px;

    & > img {
      width: 150px;
      cursor: pointer;
    }
  }

  @media (max-width: 576px) {
    & > img {
      width: 150px;
    }
  }
`;

export const HamburgerBtn = styled(MenuOutlined)`
  @media (min-width: 768px) {
    display: none;
  }
  @media (max-width: 576px) {
    display: block;
    font-size: 22px;
  }
`;

export const CloseBtn = styled(CloseOutlined)`
  @media (max-width: 576px) {
    font-size: 22px;
  }
`;
