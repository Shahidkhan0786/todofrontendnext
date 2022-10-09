import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Model from "../common/Model";
import Form from "../Form/Form";
const Navbar = () => {
  let Links = [
    { name: "HOME", link: "/" },
    // { name: "SERVICE", link: "/" },
    // { name: "ABOUT", link: "/" },
    // { name: "BLOG'S", link: "/" },
    // { name: "CONTACT", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  // let [showModel , setShowModel] = useState(false)
  

 

  const navbar = () => {
    return (
      <div className="shadow-md w-full static top-0 left-0">
        <div className="md:flex items-center justify-between bg-zinc-900  py-2 md:px-10 px-7">
          <div
            className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
          >
            {/* <span className="text-3xl text-indigo-600 mr-1 pt-2">
              <ion-icon name="logo-ionic"></ion-icon>
            </span> */}
             <h2 className="text-white">TODO_APP</h2>
          </div>

          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>

          <ul
            className={`md:flex md:items-center md:pb-0 pb-10 pt-2 absolute md:static bg-zinc-900     md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-20 " : "top-[-490px]"
            }`}
          >
            {Links.map((link) => (
              <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                <a
                  href={link.link}
                  className="text-slate-50 hover:text-lime-500 duration-500"
                >
                  {link.name}
                </a>
              </li>
            ))}
            {/* <Button onClick={modelhandler}>Add Todo</Button>
             */}
             {/* <button className='bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 
                duration-500' onClick={()=>setShowModel(true)}>
                    Add Todo
              </button> */}
          </ul>
        </div>
      </div>
    );
  };


  



 
  


  return (
    <>
      {navbar()}
      {/* <Model isVisible={showModel} onClose={()=>setShowModel(false)} title="ADD TODO">
         <Form onClose={()=>setShowModel(false)} />
      </Model> */}
    </>
  );
};

export default Navbar;
