import React from "react";
import { useNavigate } from "react-router-dom";


const ButtonViolet = ({ styles, buttonName, url }) => {
  
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${url}`);
  };

  return(
    <button 
      type="button"
      onClick={handleClick}
      className={`py-4 px-6 font-poppins font-medium text-[18px] text-white bg-gradient-to-r from-violet-600 from-5% to-violet-500 to-40% rounded-[10px] outline-none ${styles}`}>
      {buttonName}
    </button>
  )
}

export default ButtonViolet;
