import "/src/Components/Editor/Editor.css";
import * as React from "react";
import ReactMde from "react-mde";
import * as Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true,
});

const Editor = (props) => {
  const [selectedTab, setSelectedTab] = React.useState("preview");
  return (
    <div className="container">
      <ReactMde
        value={props.selectedNoteBody}
        onChange={(newValue) => {
          props.updateSelectedNote(newValue);
        }}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={(markdown) =>
          Promise.resolve(converter.makeHtml(markdown))
        }
        minEditorHeight={80}
        minPreviewHeight={80}
        heightUnits="vh"
      />
    </div>
  );
};

export default Editor;
