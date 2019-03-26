import { useState, useEffect } from 'react';

export function useMediaQuery(query) {
  const [isMatched, setIsmatched] = useState(window.matchMedia(query).matches);
  function handleResize() {
    setIsmatched(window.matchMedia(query).matches);
  }
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
  return isMatched;
}

export const foo = 'foo';
