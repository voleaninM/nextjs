import { useEffect, RefObject } from "react";

export default function useClickedOutside<T extends HTMLElement>(
  ref: RefObject<T>,
  callback: () => void,
  isOpened: boolean
) {
  useEffect(() => {
    if (!isOpened) return;

    const handleClickedOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node))
        callback();
    };
    document.addEventListener("click", handleClickedOutside);

    return () => {
      document.removeEventListener("click", handleClickedOutside);
    };
  }, [ref, callback, isOpened]);
}
