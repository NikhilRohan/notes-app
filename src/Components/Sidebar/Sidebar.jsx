import ConfirmationPopup from "../ConfirmationPopup/ConfirmationPopup";
import "/src/Components/Sidebar/Sidebar.css";
const Sidebar = () => {
  const deleteBtnTemplate = (
    <button
      className="delete-btn"
      onClick={() => {
        deleteNote();
      }}
    >
      <i className="gg-trash trash-icon"></i>
    </button>
  );
  //CM=ConfirmationModal
  const deleteCMCloseEvent = () => {
    console.log("close click event");
  };
  const deleteCMConfirmEvent = () => {
    console.log("confirm click event");
  };
  const displayNewNote = () => {
    console.log("displayNewNote Called");
  };
  return (
    <section className="sidebar">
      <div className="sidebar--header">
        <span className="sidebar--headerText">Notes</span>
        <button className="sidebar--addNewButton">
          <b>+</b>
        </button>
      </div>
      <div className="sidebar--notes">
        <div className="sidebar--notesText">
          <h4 className="sidebar--notesText-title">
            Type your dshdghjfgdhjfdghj
          </h4>
          <button className="delete-btn">
            <i className="gg-trash trash-icon"></i>
          </button>
        </div>
        <div className="sidebar--notesText selectedNote">
          <h4 className="sidebar--notesText-title">
            Type your dshdghjfgdhjfdghj
          </h4>
          <button className="delete-btn">
            <i className="gg-trash trash-icon"></i>
          </button>
        </div>
        <div
          className="sidebar--notesText"
          onClick={() => {
            displayNewNote();
          }}
        >
          <h4 className="sidebar--notesText-title">
            Type your dshdghjfgdhjfdghj
          </h4>
          <ConfirmationPopup
            btnTemplate={deleteBtnTemplate}
            cancelClickEvent={() => {
              deleteCMCloseEvent();
            }}
            confirmClickEvent={() => {
              deleteCMConfirmEvent();
            }}
            modalHeader={`Confirmation Modal`}
            modalContent={`Are you sure you want to delete this note?`}
          />
        </div>
      </div>
    </section>
  );
};
export default Sidebar;
