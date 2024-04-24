import React from "react";

const Button = ({ title, className, ...rest }) => {
  return (
    <button
      className={`${className} my-5 px-6 py-[10px] bg-[#947200] font-[500] text-sm text-center text-[#ffffff] w-full`}
      {...rest}
    >
      {title}
    </button>
  );
};

export default Button;
