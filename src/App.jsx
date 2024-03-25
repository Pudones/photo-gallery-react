import { useState, useEffect, useRef } from "react";

import { GalleryWrapper } from "./Components/GalleryWrapper";
import { GalleryContainer } from "./Components/GalleryContainer";
import { Header } from "./Components/Header";
import { GalleryMain } from "./Components/GalleryMain";
import { Footer } from "./Components/Footer";


import { GalleryModal } from "./Components/GalleryModal";

function App() {
  const [footerHeight, setFooterHeight] = useState(0);
  const footerRef = useRef(null);
  const calculateFooterHeight = () => {
    if (footerRef.current) {
      const height = footerRef.current.offsetHeight / 16;
      setFooterHeight(height);
    }
  };
  useEffect(() => {
    calculateFooterHeight();
    window.addEventListener("resize", calculateFooterHeight);
    return () => {
      window.removeEventListener("resize", calculateFooterHeight);
    };
  }, []);

  return (
    <>

      {/* <GalleryModal/> */}
      
      <GalleryWrapper footerMargin={footerHeight}>
        <GalleryContainer>
          <Header />
          <GalleryMain />
        </GalleryContainer>
      </GalleryWrapper>

      <Footer refProp={footerRef} />
    </>
  );
}

export default App;
