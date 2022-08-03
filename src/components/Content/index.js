import React, { useCallback } from 'react';
import { BtnWrapper, ContentBox, Global, MobileBtn, PcBtn } from './styles';

const Content = () => {
  const onMoveAbout = useCallback(() => {
    window.scrollTo({
      top: 800,
      behavior: 'smooth',
    });
  }, []);

  const onMoveAboutPc = useCallback(() => {
    window.scrollTo({
      top: 1022,
      behavior: 'smooth',
    });
  }, []);

  return (
    <ContentBox>
      <Global />
      <div>Your life will be reformed by COMETS</div>
      <BtnWrapper>
        <MobileBtn onClick={onMoveAbout}>ABOUT US</MobileBtn>
        <PcBtn onClick={onMoveAboutPc}>ABOUT US</PcBtn>
      </BtnWrapper>
    </ContentBox>
  );
};

export default Content;
