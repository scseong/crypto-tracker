import React from 'react';
import { useRecoilState } from 'recoil';
import { isDarkAtom } from '../atom';
import { Btn, SHeader } from './styles';

const Header = () => {
  const [isDark, setDarkAtom] = useRecoilState(isDarkAtom);

  const onClick = () => {
    setDarkAtom((prev) => !prev);
  };

  return (
    <SHeader>
      <Btn onClick={onClick}>{isDark ? 'light' : 'dark'}</Btn>
    </SHeader>
  );
};

export default Header;
