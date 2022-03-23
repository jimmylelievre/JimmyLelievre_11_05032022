import React from "react";

const ChevronUp = ({ showContent }) => {
  return (
    <svg
      onClick={showContent}
      width="28"
      height="17"
      viewBox="0 0 28 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.15993 0.653343L0.799927 3.02668L13.9999 16.2133L27.1999 3.01335L24.8399 0.653343L13.9999 11.4933L3.15993 0.653343Z"
        fill="white"
      />
    </svg>
  );
};

export default ChevronUp;
