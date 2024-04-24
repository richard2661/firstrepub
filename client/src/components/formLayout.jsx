import React from "react";

const FormLayout = ({ children, handleSubmit, title, subTitle }) => {
  return (
    <div className="w-full grid place-items-center bg-white py-4">
      <form
        className="form w-full max-w-[420px]"
        onSubmit={handleSubmit}
      >
        <h1 className="mb-6 text-2xl md:text-4xl text-center">
          {title}
        </h1>
        {subTitle && <p className="mb-4 text-sm">{subTitle}</p>}
        <div>{children}</div>
      </form>
    </div>
  );
};

export default FormLayout;
