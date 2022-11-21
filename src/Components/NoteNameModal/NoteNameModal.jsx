import "/src/Components/NoteNameModal/NoteNameModal.css";
import React from "react";
import Popup from "reactjs-popup";

const NoteNameModal = (props) => {
  const [noteName, setNoteName] = React.useState("");
  const updateNoteName = (event) => {
    setNoteName(event.target.value);
  };
  console.log(noteName);
  return (
    <Popup trigger={props.btnTemplate} modal>
      {(close) => {
        return (
          <div className="noteNameModal">
            <section className="noteNameModal--header">
              <span>Note Change Modal</span>
              <span
                onClick={() => {
                  close();
                }}
                className="close"
              >
                X
              </span>
            </section>
            <section className="noteNameModal--content">
              <label htmlFor="noteName">Note Name : </label>
              <input
                type="text"
                value={noteName}
                onChange={(event) => {
                  updateNoteName(event);
                }}
                id="noteName"
                className="noteName--input"
              />
            </section>
            <section className="noteNameModal--footer">
              <button
                className="confirmationModal--footer-btn"
                onClick={() => {
                  props.confirmClickevent(noteName);
                  setNoteName("");
                  close();
                }}
              >
                Confirm
              </button>
              <button
                onClick={() => {
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

export default NoteNameModal;
