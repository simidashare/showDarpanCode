export const homeObjOne = {
  id: `introduction`,
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: `About`,
  headline: `Introduction`,
  description: (
    <>
      Darpan Hindi Radio Group is a Hindi Language Broadcastng Group of
      Multi-Cultural Radio Association Ltd (MCRA). MCRA has given an airtime of
      one hour to the group to broadcast a radio program in Hindi on every
      Sunday from 10-11 am on MCRA Radio Station - Radio 2000 FM 98.5 MHz.
      <br />
      <br />
      The program is run and managed by the financial members of the Darpan
      Hindi Radio Broadcasting Group All members work on a voluntary basis
      without receiving any financial benefit. Any funds raised through
      sponsorship from business enterpreneurs are used to improve the quality
      and effectiveness of broadcast and for charity purposes such as helping
      poor and needy children.
    </>
  ),
  buttonLabel: `Read More`,
  imgStart: false,
  img: require("../../images/svg-1.svg").default, //must use default
  alt: `intro Photo`,
  dark: true,
  primary: true,
  darkText: false,
  to: "history",
  isShown: true,
};

export const homeObjTwo = {
  id: `aimsAndObjectives`,
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: `About`,
  headline: `AIMS AND OBJECTIVES`,
  description: <></>,
  buttonLabel: `Read More`,
  imgStart: false,
  img: require("../../images/svg-2.svg").default,
  alt: `aimsAndObjectives Photo`,
  dark: true,
  primary: true,
  darkText: false,
  to: "history",
  isShown: false,
};

export const homeObjFour = {
  id: `structure`,
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: `test`,
  headline: `STRUCTURE`,
  description: <>some text</>,
  buttonLabel: `Read More`,
  imgStart: true,
  img: require("../../images/svg-4.svg").default,
  alt: `structure Photo`,
  dark: false,
  primary: false,
  darkText: true,
  to: "history",
  isShown: false,
};

export const OcicObjOne = {
  id: `oci`,
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: ``,
  headline: `Overseas Citizen of India (OCI) Cardholder`,
  description: (
    <>
      Overseas citizen of India card is required to be re-issued each time a new
      password is issued up to the age of 20 years.
      <br />
      <br />
      Re-issuance of the OCI card is not mandatory each time a new passport is
      issued between 21 and 50 years of age. However, if the applicant wishes to
      obtain new set of OCI document, he/she can apply for the same. <br />
      <br />
      OCI card is required to be re-issued only once on renewal of passport
      after completing 50 years of age. <br />
      <br />
      If the OCI card is issued at the age of 50 years or later, there is no
      need for renewal of the OCI card.
      <br />
      <br />
      Applicants may also refer to the following links (including FAQs) for any
      further clarification on the matter: <br />
      <br />
      a. https://
      https://boi.gov.in/content/overseas-citizen-india-oci-cardholder <br />
      <br />
      b. https:// https://mha.gov.in/MHA1/OCI.html
    </>
  ),
  buttonLabel: "",
  imgStart: true,
  img: require("../../images/svg-5.svg").default, //must use default
  alt: `OCI Photo`,
  dark: false,
  primary: false,
  darkText: true,
  to: "/",
  isShown: false,
};
