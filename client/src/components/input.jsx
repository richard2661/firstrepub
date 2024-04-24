import React from "react";

const Input = ({ title, children, ...rest }) => {
  return (
    <div className="w-full relative cursor-pointer">
      <label className="mb-1 block">{title}</label>
      <input
        type="text"
        placeholder={`Enter ${title}`}
        className={`px-3 py-[6px] text-sm bg-[#ffffff] w-full border-[1px] border-[#a8a8a8] focus:border-[#947200] hover:border-[#947200]`}
        required
        {...rest}
      />
      {children ? children : null}
    </div>
  );
};

export default Input;
