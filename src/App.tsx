import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Popup from "./component/Popup/Popup";
import { PopupSettings } from "./type";
import PopupProvider, { usePopup } from "./provider/PopupProvider";
const settings: PopupSettings = {
  paper: {
    backgroundColor: "#fff",
    boxShadow: "none",
    border: "1px solid #000",
    transition: "opacity 5s",
  },
  okButton: {
    backgroundColor: "#000",
    color: "#fff",
    borderRadius: "20px",
  },
};
function App() {
  const [open, setOpen] = useState(false);
  const [openPopup, closePopup] = usePopup();
  return (
    <div className="App">
      <h1>Text</h1>
      <button
        onClick={() => {
          openPopup({
            content: (
              <div style={{ padding: "20px" }}>Helloefwewerwerwerwerwerwer</div>
            ),
            showCloseIcon: true,
            disableBackdropClick: true,
            onOK: () => {
              openPopup({
                content: (
                  <div style={{ padding: "20px" }}>
                    Helloefwewerwerwerwerwerwer
                  </div>
                ),
                showCloseIcon: true,
                disableBackdropClick: true,
                onOK: () =>
                  openPopup({
                    content: (
                      <div style={{ padding: "20px" }}>
                        Helloefwewerwerwerwerwerwer
                      </div>
                    ),
                    showCloseIcon: true,
                    disableBackdropClick: true,
                    onOK: () => {
                      openPopup({
                        content: (
                          <div style={{ padding: "20px" }}>
                            Helloefwewerwerwerwerwerwer
                          </div>
                        ),
                        showCloseIcon: true,
                        disableBackdropClick: true,
                        onOK: () => {},
                        onCancel: closePopup,
                        theme: "light",
                      });
                    },
                    onCancel: closePopup,
                    theme: "dark",
                  }),
                onCancel: closePopup,
              });
            },
            onCancel: closePopup,
            theme: "dark",
            settings: settings,
          });
        }}
      >
        open modal
      </button>
    </div>
  );
}

export default App;
