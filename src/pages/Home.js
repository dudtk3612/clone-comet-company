import React, { useCallback, useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { ArrowUpOutlined } from '@ant-design/icons';
import Header from '../components/Header';
import Content from '../components/Content';
import About from '../components/About/index.';

import FooterTwo from '../components/FooterTwo';
import FooterOne from '../components/FooterOne/index.js';

const HomeBox = styled.div`
  background-image: url(${process.env.PUBLIC_URL + 'images/bg_home.png'});
  background-size: cover;
  background-color: #f5f6ff;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center 0px;
  width: 100%;
  height: 100%;
`;

const fadeAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(0)
  }

  100% {
    opacity: 1;
    transform: scale(1)
  }
`;

const TopBtn = styled(ArrowUpOutlined)`
  @media (min-width: 768px) {
    position: fixed;
    width: 50px;
    height: 50px;
    line-height: 50px;
    font-size: 25px;
    bottom: 100px;
    right: 40px;
    border-radius: 50%;
    background-color: #414141;
    color: white;
    animation: ${fadeAnimation} 0.3s linear;
  }
  @media (max-width: 576px) {
    position: fixed;
    width: 40px;
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    bottom: 60px;
    right: 20px;
    border-radius: 50%;
    background-color: #414141;
    color: white;
    animation: ${fadeAnimation} 0.3s linear;
  }
`;

const Home = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  const scrollTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  useEffect(() => {
    function onScroll() {
      if (document.documentElement.scrollHeight === 6622) {
        if (window.scrollY >= 1838) {
          setShowTopBtn(true);
        } else {
          setShowTopBtn(false);
        }
      } else {
        if (window.scrollY >= 756) {
          setShowTopBtn(true);
        } else {
          setShowTopBtn(false);
        }
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <HomeBox>
      <Header />
      <Content />
      <About />
      <FooterOne />
      <FooterTwo />
      {showTopBtn && <TopBtn onClick={scrollTop} />}
    </HomeBox>
  );
};

export default Home;
