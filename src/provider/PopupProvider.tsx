import React, { createContext, useContext, useRef, useState } from "react";
import Popup from "../component/Popup/Popup";
import { PopupContextType, PopupProps } from "../type";

const PopupContext = createContext<PopupContextType>([() => {}, () => {}]);
export const usePopup = () => useContext(PopupContext);

function PopupProvider(props: { children: React.ReactChild }) {
  const [popups, setPopups] = useState<PopupProps[]>([]);

  const openPopup = (options: PopupProps) => {
    const popup = { ...options, open: true };
    setPopups((popups) => [...popups, popup]);
  };

  const closePopup = () => {
    setPopups((popups) => {
      const lastestPopup = popups.pop();
      console.log(popups);
      return [...popups];
    });
  };

  const contextValue = useRef([openPopup, closePopup] as const);

  return (
    <PopupContext.Provider value={contextValue.current}>
      {props.children}
      {console.log(popups)}
      {popups.map((popup, i) => (
        <Popup {...popup} key={i} onClose={closePopup}></Popup>
      ))}
    </PopupContext.Provider>
  );
}

export default PopupProvider;
