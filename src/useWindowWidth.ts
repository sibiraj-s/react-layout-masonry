import { useSyncExternalStore } from 'react';

const subscribe = (onChange: () => void) => {
  window.addEventListener('resize', onChange);

  return () => {
    window.removeEventListener('resize', onChange);
  };
};

const noopSubscribe = () => () => {};

const getWidth = () => window.innerWidth;

// Width is unknown on the server. Hydration uses the same value so markup matches, then re-renders with the real width
const getServerWidth = () => 0;

const useWindowWidth = (isResponsive: boolean = true): number => {
  return useSyncExternalStore(isResponsive ? subscribe : noopSubscribe, getWidth, getServerWidth);
};

export default useWindowWidth;
