import "/src/Components/ConfirmationPopup/ConfirmationPopup.css";
import React from "react";
import Popup from "reactjs-popup";

const ConfirmationPopup = (props) => {
  return (
    <Popup trigger={props.btnTemplate} modal>
      {(close) => {
        return (
          <div className="confirmationModal">
            <section className="confirmationModal--header">
              <span>{props.modalHeader}</span>
              <span
                onClick={() => {
                  props.cancelClickEvent();
                  close();
                }}
                className="close"
              >
                X
              </span>
            </section>
            <section className="confirmationModal--content">
              {props.modalContent}
            </section>
            <section className="confirmationModal--footer">
              <button
                className="confirmationModal--footer-btn"
                onClick={() => {
                  props.confirmClickEvent();
                  close();
                }}
              >
                Confirm
              </button>
              <button
                onClick={() => {
                  props.cancelClickEvent();
                  close();
                }}
                className="confirmationModal--footer-btn"
              >
                Cancel
              </button>
            </section>
          </div>
        );
      }}
    </Popup>
  );
};

export default ConfirmationPopup;
