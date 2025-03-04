import { useState, useEffect } from "react";

const ScrollReplaceContent = () => {
  const contentList = [
    "Welcome to our website!",
    "Discover amazing features.",
    "Enjoy seamless experience.",
    "Contact us for more details!"
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = document.documentElement.scrollTop; // Alternative to window.scrollY
      const newIndex = Math.min(
        Math.floor(scrollPosition / 200), // Change content every 200px scrolled
        contentList.length - 1
      );
      setCurrentIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ height: "100vh", padding: "50px", fontSize: "24px", zIndex: 20000 }}>
      <div style={{ height: "2000px" }}> {/* Increased height */}
        <h1 style={{ position: "fixed", top: "20px", left: "50%", transform: "translateX(-50%)" }}>
          {contentList[currentIndex]}
        </h1>
      </div>
    </div>
  );
};

export default ScrollReplaceContent;
