import IframeSection from "../components/IframeSection/index";
import Navbar from "../components/Navbar/index";
import { NavItemData } from "../components/Navbar/Data";
import SideModal from "../components/SideModal/index";
import Footer from "../components/Footer";
import { useContext } from "react";
import Context from "../store/index";

const AustralianCouncilOfHinduClergy = () => {
  const ctx = useContext(Context);
  return (
    <>
      <Navbar toggle={ctx.toggle} {...NavItemData} />
      {ctx.modal && <SideModal />}
      <IframeSection src="https://www.australiancouncilofhinduclergy.com/" />
      <Footer />
    </>
  );
};

export default AustralianCouncilOfHinduClergy;
