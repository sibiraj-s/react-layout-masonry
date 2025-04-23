import { useCallback, useEffect, useState } from 'react';

const useWindowWidth = (isResponsive: boolean = true): number => {
  const [windowWidth, setWindowSize] = useState();

  const handleResize = useCallback(() => {
    setWindowSize(window.innerWidth);
  }, []);

  useEffect(() => {
    handleResize();
    if (isResponsive) {
      window.addEventListener('resize', handleResize);
    } else {
      window.removeEventListener('resize', handleResize);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isResponsive, handleResize]);

  return windowWidth;
};

export default useWindowWidth;
