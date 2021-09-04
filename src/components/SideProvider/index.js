import Context from "../../store/index";
import { useReducer } from "react";

const defaultState = {
  modal: false,
  links: "",
  placeHolder: "home",
};

const modalReducer = (state, action) => {
  if (action.type === `TOGGLE`) {
    const currentModal = !state.modal;
    return { ...state, modal: currentModal };
  }
  if (action.type === `CONFIRM_CLOSE`) {
    const currentModal = false;
    return { ...state, modal: currentModal };
  }
  if (action.type === `UPDATE_LINKS`) {
    const currentModal = !state.modal;
    // const updatedLink = action.link;
    const updatedPlaceHolder = action.placeHolder;

    return {
      ...state,
      placeHolder: updatedPlaceHolder,
      modal: currentModal,
    };
  }
};

const SideProvider = ({ children }) => {
  const [mainState, dispatchAction] = useReducer(modalReducer, defaultState);

  const toggleHandler = () => {
    dispatchAction({
      type: "TOGGLE",
    });
  };
  const confirmCloseHandler = () => {
    dispatchAction({
      type: "CONFIRM_CLOSE",
    });
  };
  const updateLinksHandler = (link, placeHolder) => {
    dispatchAction({
      type: "UPDATE_LINKS",
      link: link,
      placeHolder: placeHolder,
    });
  };

  const context = {
    modal: mainState.modal,
    links: mainState.links,
    placeHolder: mainState.placeHolder,
    updateLinks: updateLinksHandler,
    toggle: toggleHandler,
    confirmClose: confirmCloseHandler,
  };

  return <Context.Provider value={context}>{children}</Context.Provider>;
};

export default SideProvider;
