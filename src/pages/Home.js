import Navbar from "../components/Navbar/index";
import { NavItemData } from "../components/Navbar/Data";
import SideModal from "../components/SideModal/index";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import { homeObjOne } from "../components/InfoSection/Data";
import ContentSection from "../components/ContentSection";
import {
  contentObjOne,
  contentObjTwo,
  contentObjThree,
} from "../components/ContentSection/Data";
import { useContext } from "react";
import Context from "../store/index";

const Home = () => {
  const ctx = useContext(Context);

  // const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   console.log("HomePage - " + ctx.modal);
  // });

  return (
    <>
      {/* <Sidebar isOpen={isOpen} toggle={toggle} {...sidebarObjOne} /> */}
      <Navbar toggle={ctx.toggle} {...NavItemData} />
      {ctx.modal && <SideModal />}
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <ContentSection {...contentObjOne} />
      <ContentSection {...contentObjTwo} />
      <ContentSection {...contentObjThree} />
      <Footer />
    </>
  );
};

export default Home;
