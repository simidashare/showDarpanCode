import React from "react";
const Context = React.createContext({
  modal: false,
  links: "",
  placeHolder: "home",
  toggle: () => {},
  confirmClose: () => {},
  updateLinks: (link, placeHolder) => {},
});

export default Context;
