import React, { useCallback, useState } from 'react';

import SubMenu from '../SubMenu';
import SubMenuPc from '../SubMenuPc';
import { CloseBtn, HamburgerBtn, LogoWrapper, NavWrapper } from './styles';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const onShowMenu = useCallback(() => {
    setShowMenu(true);
  }, []);

  const onCloseMenu = useCallback(() => {
    setShowMenu(false);
  }, []);

  const onScrollTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <>
      <NavWrapper showMenu={showMenu}>
        <LogoWrapper>
          <img
            onClick={onScrollTop}
            src={process.env.PUBLIC_URL + 'images/top-logo.png'}
            alt='logo'
          />
        </LogoWrapper>
        <div>
          {showMenu ? (
            <CloseBtn onClick={onCloseMenu} />
          ) : (
            <HamburgerBtn onClick={onShowMenu} />
          )}
        </div>
        <SubMenuPc />
      </NavWrapper>
      {showMenu && <SubMenu showMenu={showMenu} />}
    </>
  );
};

export default Header;
