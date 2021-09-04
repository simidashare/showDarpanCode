import { useContext } from "react";
import Context from "../store/index";
import Home from "./Home";
import Broadcasting from "./Broadcasting";
import OCI from "./OverseasCitizenOfIndiaCardholder";
import HindiForKidsInAustralia from "./HindiForKidsInAustralia";
import IndianSupportCentre from "./IndianSupportCentre";
import AustralianCouncilOfHinduClergy from "./AustralianCouncilOfHinduClergy";
import UsefulLinks from "./UsefulLinks";

const MainController = () => {
  const ctx = useContext(Context);
  const renderingHandler = (picked) => {
    console.log(picked);
    const page = {
      home: <Home />,
      broadcasting: <Broadcasting />,
      overseasCitizenOfIndiaCardholder: <OCI />,
      hindiForKidsInAustralia: <HindiForKidsInAustralia />,
      indianSupportCentre: <IndianSupportCentre />,
      australianCouncilOfHinduClergy: <AustralianCouncilOfHinduClergy />,
      usefulLinks: <UsefulLinks />,
    };
    return page[picked] ?? page["home"];
  };
  return <div>{renderingHandler(ctx.placeHolder)}</div>;
};

export default MainController;
