import React, { DetailedHTMLProps, MouseEvent } from "react";
import styled, { ThemedStyledProps } from "styled-components";
import { ThemeDict } from "../../common";
import { PopupProps, PopupSettings, Theme } from "../../type";

const Overlay = styled.div<{ open?: Boolean; theme: Theme }>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: ${(props) => (props.open ? "flex" : "none")};
  background-color: ${(props) => props.theme.backdropColor};
  justify-content: center;
  z-index: 1;
  align-items: center;
  transition: opacity 0.25s;
`;
const Content = styled.div<{ theme: Theme }>`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
  padding: 0.5rem;
  border-radius: 5px;
  position: relative;
  margin: 0 auto;
  box-shadow: 0px 11px 15px -7px rgb(0 0 0 / 20%),
    0px 24px 38px 3px rgb(0 0 0 / 14%), 0px 9px 46px 8px rgb(0 0 0 / 12%);
`;
const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  grid-gap: 0.5rem;
`;
const Button = styled.button<{ theme: Theme }>`
  padding: 0.5rem 0.75rem;
  border: none;
  background-color: inherit;
  color: ${(props) => props.theme.buttonTextColor};
  border-radius: 5px;
  outline: none;
  font-weight: 600;
  &:hover {
    color: ${(props) => props.theme.hoverColor};
  }
`;
const CloseButton = styled.button`
  position: absolute;
  top: 0.75rem;
  right: 0.5rem;
  outline: none;
  border: none;
  background-color: inherit;
`;
const CloseIcon = styled.div<{ theme: Theme }>`
  width: 20px;
  height: 20px;
  color: ${(props) => props.theme.color};
  opacity: 0.5;
  &:before,
  :after {
    position: absolute;
    left: 15px;
    content: " ";
    height: 18px;
    width: 2px;
    background-color: ${(props) => props.theme.color};
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
  &:hover {
    opacity: 1;
  }
`;
function Popup(props: PopupProps) {
  const theme = ThemeDict[props.theme || "light"];
  return (
    <div>
      <Overlay
        id="overlay"
        open={props.open}
        theme={theme}
        style={
          props.settings && props.settings["backdropColor"]
            ? { backgroundColor: props.settings["backdropColor"] }
            : {}
        }
        onClick={(e) => {
          if (props.disableBackdropClick) return;
          // @ts-ignore
          if (e.target.id === "overlay") props.onClose();
          else return;
        }}
      >
        <Content
          theme={theme}
          style={props.settings && props.settings["paper"]}
        >
          {props.showCloseIcon && (
            <CloseButton
              theme={theme}
              onClick={(e) => {
                e.stopPropagation();
                console.log("remove");
                props.onClose && props.onClose();
              }}
            >
              <CloseIcon theme={theme}></CloseIcon>
            </CloseButton>
          )}
          <div>{props.content}</div>
          <ButtonGroup>
            {props.onOK && (
              <Button
                theme={theme}
                onClick={props.onOK as any}
                style={props.settings && props.settings["okButton"]}
              >
                OK
              </Button>
            )}
            {props.onCancel && (
              <Button
                theme={theme}
                onClick={props.onCancel as any}
                style={props.settings && props.settings["cancelButton"]}
              >
                CANCEL
              </Button>
            )}
          </ButtonGroup>
        </Content>
      </Overlay>
    </div>
  );
}

export default Popup;
