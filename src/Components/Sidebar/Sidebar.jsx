import ConfirmationPopup from "../ConfirmationPopup/ConfirmationPopup";
import "/src/Components/Sidebar/Sidebar.css";
import NoteNameModal from "../NoteNameModal/NoteNameModal";
const Sidebar = (props) => {
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
  const sidebarNotesElements = props.notes.map((eachNote) => {
    return (
      <div
        className={`sidebar--notesText${
          props.selectedNote === eachNote.id ? " selectedNote" : ""
        }`}
        onClick={() => {
          displayNewNote(eachNote.id);
        }}
        key={eachNote.id}
      >
        <h4 className="sidebar--notesText-title">{eachNote.title}</h4>
        <ConfirmationPopup
          btnTemplate={deleteBtnTemplate}
          cancelClickEvent={() => {
            deleteCMCloseEvent(eachNote.id);
          }}
          confirmClickEvent={() => {
            deleteCMConfirmEvent(eachNote.id);
          }}
          modalHeader={`Confirmation Modal`}
          modalContent={`Are you sure you want to delete this note?`}
        />
      </div>
    );
  });
  //CM=ConfirmationModal
  const deleteCMCloseEvent = () => {
    console.log("close click event");
  };
  const deleteCMConfirmEvent = (id) => {
    props.deleteExistingNote(id);
  };
  const displayNewNote = (id) => {
    props.displayNewNote(id);
  };
  const addNoteBtnTemplate = (
    <button className="sidebar--addNewButton">
      <b>+</b>
    </button>
  );
  return (
    <section className="sidebar">
      <div className="sidebar--header">
        <span className="sidebar--headerText">Notes</span>
        <NoteNameModal
          btnTemplate={addNoteBtnTemplate}
          confirmClickevent={(value) => {
            console.log(value);
            props.createNewNote(value);
          }}
        />
      </div>
      <div className="sidebar--notes">{sidebarNotesElements}</div>
    </section>
  );
};
export default Sidebar;
