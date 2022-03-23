import React from "react";

const ChevronDown = ({ showContent }) => {
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
        d="M24.84 16.3466L27.2 13.9733L14 0.786621L0.800025 13.9866L3.16003 16.3466L14 5.50662L24.84 16.3466Z"
        fill="white"
      />
    </svg>
  );
};

export default ChevronDown;
