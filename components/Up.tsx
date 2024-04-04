"use client";
import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`fixed bottom-4 right-4 p-2 z-10 bg-blue-500 hover:bg-blue-700 hover:scroll-py-2 text-white rounded-md cursor-pointer ${
        isVisible ? 'visible' : 'invisible'
      }`}
      onClick={scrollToTop}
    >
     <FaArrowUp/> 
    </div>
  );
};

export default ScrollToTopButton;
