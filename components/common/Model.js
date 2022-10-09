import React from "react";

const Model = ({ isVisible, onClose ,children ,title,values}) => {
  
  const mainclose = (e) => {
    if (e.target.id == "wrapper") {
      values();
      onClose();
    }
  };
  if (!isVisible) return null;
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      id="wrapper"
      onClick={mainclose}
    >
      <div className="w-[600PX] flex flex-col ">
        <button className="text-white text-xs place-self-end p-3" onClick={onClose}>
          X
        </button>
        <div className="bg-white p-2 rounded">
          <div className="container">
            <div className="row">
              <div className="title text-center h2 mt-2">
                {title}
              </div>
            </div>
          </div>
         {children}
        </div>
      </div>
    </div>
  );
};

export default Model;
