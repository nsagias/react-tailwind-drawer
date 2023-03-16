import { useState } from "react";
import {   RxHamburgerMenu } from "react-icons/rx";

export default function Drawer() {

  const [isDrawerVisible, setDrawerVisible] = useState(false);

  return (
    <>
    { !isDrawerVisible ? 
      (
        <>
        <RxHamburgerMenu />
        </>
      ) : (
        <div className="top-0 right-0 fixed bg-blue-400 text-white w-[35vw] h-screen p-10">
          <h2>This is the drawer</h2>
        </div>
      )}
    
    </>
  );
}