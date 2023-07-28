import React, { useState } from "react";
import "./BackToTopButton.css"; // You can create a separate CSS file for the styling.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faArrowUp } from "@fortawesome/free-solid-svg-icons";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle the scroll event and toggle visibility of the button
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Function to scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Attach event listener when the component mounts
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`back-to-top-button ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </div>
  );
};

export default BackToTopButton;
