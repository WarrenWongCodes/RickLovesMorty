import React, { useEffect, useState } from 'react';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

export default function ScrollBar() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    window.pageYOffset > 2000 ? setIsVisible(true) : setIsVisible(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <div>
          <ArrowUpwardIcon
            style={{ float: 'right' }}
            fontSize="large"
            alt="scroll to top"
            onClick={scrollToTop}
          />
        </div>
      )}
    </>
  );
}
