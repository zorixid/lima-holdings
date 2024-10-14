"use client";
import { useState, useEffect } from "react";

const useIsLargeScreen = () => {
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);

  useEffect(() => {
    // Function to check screen size
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsLargeScreen(true); // lg size in TailwindCSS is 1024px and up
      } else {
        setIsLargeScreen(false);
      }
    };

    // Check the screen size on mount and when the window resizes
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { isLargeScreen };
};

export default useIsLargeScreen;
