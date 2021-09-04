import { useState } from "react";
import Navbar from "../components/Navbar/index";
import Sidebar from "../components/Sidebar/index";
import { sidebarObjTwo } from "../components/Sidebar/Data";
import { NavItemData } from "../components/Navbar/Data";
import Footer from "../components/Footer";
import SideModal from "../components/SideModal/index";
import { useContext, useEffect } from "react";
import Context from "../store/index";

const Broadcasting = () => {
  const ctx = useContext(Context);
  // const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => {
  //   setIsOpen(!isOpen);
  // };
  const myStyle = {
    margin: "50px",
    textAlign: "center",
  };
  // useEffect(() => {
  //   console.log("singlePage - " + ctx.modal);
  // });

  return (
    <>
      {/* <Sidebar isOpen={isOpen} toggle={toggle} {...sidebarObjTwo} /> */}
      <Navbar toggle={ctx.toggle} {...NavItemData} />
      {ctx.modal && <SideModal />}
      <h1 style={myStyle}>Broadcasting</h1>
      <Footer />
    </>
  );
};

export default Broadcasting;
