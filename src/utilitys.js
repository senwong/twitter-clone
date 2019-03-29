import { useState, useEffect } from 'react';

export function useMediaQuery(query) {
  const mql = window.matchMedia(query);
  const [isMatched, setIsmatched] = useState(mql.matches);
  function handleMQChange(e) {
    setIsmatched(e.matches);
  }
  useEffect(() => {
    mql.addListener(handleMQChange);
    return () => {
      mql.removeListener(handleMQChange);
    };
  });
  return isMatched;
}

export const foo = 'foo';
