import React from "react";

const ButtonViolet = ({ styles, buttonName }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-white bg-gradient-to-r from-violet-600 from-5% to-violet-500 to-40% rounded-[10px] outline-none ${styles}`}>
    {buttonName}
  </button>
);

export default ButtonViolet;
