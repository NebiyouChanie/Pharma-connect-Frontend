import React from "react";

function Button({ type, children }) {
  return (
    <button
      className={`px-4 md:px-8 py-2 rounded-md font-semibold
        ${type === "primary"
          ? "bg-primary text-white "
          : "text-primary border border-primary"}
      `}
    >
      {children}
    </button>
  );
}

export default Button;
