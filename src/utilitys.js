import { useState, useEffect, useRef } from "react";

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

/**
 * execute a callback function when clicked outside a element.
 * @param {function} cb callback function only executed
 * when click target outside the ref element
 * @returns {{current: HTMLElement}} refContainer refferring the element
 */
export function useClickOutsideEl(cb, ...refs) {
  function isContains(container, element) {
    return container === element || container.contains(element);
  }
  function handleWindowClick({ target }) {
    if (refs.some(ref => ref.current && isContains(ref.current, target))) {
      return;
    }
    cb();
  }
  useEffect(() => {
    window.addEventListener("click", handleWindowClick);
    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  });
}

export function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
