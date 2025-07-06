import { useCallback, useEffect, useLayoutEffect, useState } from 'react';

const isBrowser = typeof window !== 'undefined';

const useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect;

const useWindowWidth = (isResponsive: boolean = true): number => {
  const [windowWidth, setWindowSize] = useState(isBrowser ? window.innerWidth : 0);

  const updateWindowSize = useCallback(() => {
    setWindowSize(window.innerWidth);
  }, []);

  useEffect(() => {
    if (isResponsive) {
      window.addEventListener('resize', updateWindowSize);
    }

    return () => {
      window.removeEventListener('resize', updateWindowSize);
    };
  }, [isResponsive, updateWindowSize]);

  useIsomorphicLayoutEffect(() => {
    updateWindowSize();
  }, [updateWindowSize]);

  return windowWidth;
};

export default useWindowWidth;
