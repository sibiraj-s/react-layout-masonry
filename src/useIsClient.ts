import { useSyncExternalStore } from 'react';

const noopSubscribe = () => () => {};

// false on the server and during hydration, true for any client render after that
const useIsClient = (): boolean => {
  return useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );
};

export default useIsClient;
