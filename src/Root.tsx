import { Outlet } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query/devtools';
import Header from './components/Header';
import { ThemeProvider } from 'styled-components';
import { isDarkAtom } from './atom';
import { useRecoilValue } from 'recoil';
import { darkTheme, lightTheme } from './theme';
import GlobalStyles from './GlobalStyles';

const Root = () => {
  const isDark = useRecoilValue(isDarkAtom);
  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Header />
        <Outlet />
        {/* <ReactQueryDevtools /> */}
      </ThemeProvider>
    </>
  );
};

export default Root;
