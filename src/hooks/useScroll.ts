import { useState, useEffect, useRef, useCallback } from "react";

export const useScroll = (totalItems: number) => {
  const incrementAmount = 20;
  const [visibleItems, setVisibleItems] = useState(incrementAmount);
  const listRef = useRef<HTMLUListElement | null>(null);

  const loadMoreItems = useCallback(() => {
    if (visibleItems < totalItems) {
      setVisibleItems((prevVisible) =>
        Math.min(prevVisible + incrementAmount, totalItems)
      );
    }
  }, [visibleItems, totalItems, incrementAmount]);

  const handleScroll = useCallback(() => {
    if (listRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listRef.current;
      if (scrollTop + clientHeight >= scrollHeight - 20) {
        loadMoreItems();
      }
    }
  }, [loadMoreItems]);

  useEffect(() => {
    const currentListRef = listRef.current;
    if (currentListRef) {
      currentListRef.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (currentListRef) {
        currentListRef.removeEventListener("scroll", handleScroll);
      }
    };
  }, [handleScroll]);

  return { visibleItems, listRef };
};
