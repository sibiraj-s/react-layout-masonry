import { useCallback, useEffect, useState } from 'react';

const useWindowWidth = (isResponsive: boolean): number => {
  const [windowWidth, setWindowSize] = useState(window.innerWidth);

  const handleResize = useCallback(() => {
    setWindowSize(window.innerWidth);
  }, []);

  useEffect(() => {
    if (isResponsive) {
      window.addEventListener('resize', handleResize);
    } else {
      window.removeEventListener('resize', handleResize);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isResponsive]);

  return windowWidth;
};

export default useWindowWidth;
