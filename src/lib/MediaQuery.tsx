import { useMediaQuery } from 'react-responsive';

const Mobile = ({ children }: any) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};

const Tablet = ({ children }: any) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  return isTablet ? children : null;
};

const PC = ({ children }: any) => {
  const isPc = useMediaQuery({ minWidth: 1024 });
  return isPc ? children : null;
};

export { Mobile, Tablet, PC };
