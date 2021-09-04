import Navbar from "../components/Navbar/index";
import { NavItemData } from "../components/Navbar/Data";
import InfoSection from "../components/InfoSection";
import { OcicObjOne } from "../components/InfoSection/Data";
import SideModal from "../components/SideModal/index";
import Footer from "../components/Footer";
import { useContext } from "react";
import Context from "../store/index";

const OverseasCitizenOfIndiaCardholder = () => {
  const ctx = useContext(Context);
  return (
    <>
      <Navbar toggle={ctx.toggle} {...NavItemData} />
      {ctx.modal && <SideModal />}
      <InfoSection {...OcicObjOne} />
      <Footer />
    </>
  );
};

export default OverseasCitizenOfIndiaCardholder;
