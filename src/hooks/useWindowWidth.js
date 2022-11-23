import { useState, useEffect } from "react";

const getWindowWidth=()=> {
  const { innerWidth: width } = window;
  return width < 720;
}

const useWindowWidth=()=> {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowWidth()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowWidth());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

export default useWindowWidth;
