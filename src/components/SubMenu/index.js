import React, { useCallback } from 'react';
import { onScrollLink } from '../../util/onscrolllink';

import { SubMenuWrapper } from './styles';

const SubMenu = ({ showMenu }) => {
  const onMoveHome = useCallback(() => {
    onScrollLink(0);
  }, []);

  const onMoveAbout = useCallback(() => {
    onScrollLink(800);
  }, []);

  const onMoveAsk = useCallback(() => {
    onScrollLink(1600);
  }, []);

  return (
    <SubMenuWrapper showMenu={showMenu}>
      <div className='SubMenu Home'>
        <a onClick={onMoveHome}>HOME</a>
      </div>
      <div className='SubMenu About'>
        <a onClick={onMoveAbout}>ABOUT</a>
      </div>
      <div className='SubMenu Ask'>
        <a onClick={onMoveAsk}>CONTACT US</a>
      </div>
    </SubMenuWrapper>
  );
};

export default SubMenu;
