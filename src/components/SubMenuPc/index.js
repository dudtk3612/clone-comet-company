import React, { useCallback, useState } from 'react';
import { SubMenuPcWrapper } from './styles';

const SubMenuPc = () => {
  let cssStyle = ['aTagCurrHome', 'aTagCurrAbout', 'aTagCurrContactUs'];
  const [isSelected, setisSelected] = useState(() => cssStyle);

  const onStyle = useCallback(
    (target, top) => () => {
      setisSelected(target);
      window.scrollTo({
        top: top,
        behavior: 'smooth',
      });
    },
    []
  );

  return (
    <SubMenuPcWrapper>
      <div className='SubMenuPc'>
        <a
          className={[
            'aTag',
            isSelected === 'aTagCurrHome' ? 'aTagCurrHome' : 'aTag',
          ].join(' ')}
          onClick={onStyle('aTagCurrHome', 0)}
        >
          HOME
        </a>
      </div>
      <div className='SubMenuPc'>
        <a
          className={[
            'aTag',
            isSelected === 'aTagCurrAbout' ? 'aTagCurrAbout' : 'aTag',
          ].join(' ')}
          onClick={onStyle('aTagCurrAbout', 1022)}
        >
          ABOUT
        </a>
      </div>
      <div className='SubMenuPc'>
        <a
          className={[
            'aTag',
            isSelected === 'aTagCurrContactUs' ? 'aTagCurrContactUs' : 'aTag',
          ].join(' ')}
          onClick={onStyle('aTagCurrContactUs', 1962)}
        >
          CONTACT US
        </a>
      </div>
    </SubMenuPcWrapper>
  );
};

export default SubMenuPc;
