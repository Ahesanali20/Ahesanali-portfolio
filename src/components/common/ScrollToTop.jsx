import { createContext, useCallback, useLayoutEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const scrollPositions = new Map();
export const ScrollRestorationContext = createContext(() => {});

const ScrollToTop = ({ children }) => {
  const location = useLocation();
  const navigationType = useNavigationType();
  const currentKeyRef = useRef(location.key);

  useLayoutEffect(() => {
    const previousKey = currentKeyRef.current;

    if (previousKey !== location.key && navigationType !== "POP") {
      scrollPositions.set(previousKey, {
        x: window.scrollX,
        y: window.scrollY,
      });
    }

    currentKeyRef.current = location.key;

    if (navigationType !== "POP") {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }
  }, [location.key, navigationType]);

  useLayoutEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    return () => {
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  useLayoutEffect(() => {
    const savePosition = () => {
      scrollPositions.set(currentKeyRef.current, {
        x: window.scrollX,
        y: window.scrollY,
      });
    };

    window.addEventListener("scroll", savePosition, {
      passive: true,
    });

    savePosition();

    return () => {
      savePosition();
      window.removeEventListener("scroll", savePosition);
    };
  }, []);

  const restorePosition = useCallback((key) => {
    if (navigationType !== "POP" || location.key !== key) {
      return;
    }

    const position = scrollPositions.get(key);

    if (!position) {
      return;
    }

    window.scrollTo({
      top: position.y,
      left: position.x,
      behavior: "instant",
    });
  }, [location.key, navigationType]);

  return (
    <ScrollRestorationContext.Provider value={restorePosition}>
      {children}
    </ScrollRestorationContext.Provider>
  );
};

export default ScrollToTop;
