import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
// import notes from "../notes";

// App jsx file for displaying notes and note items
function App(){
    const [notes, setNotes] = useState([]);

    // When 'add' is clicked the new note is added
    function addNote(note){
        setNotes(prevNotes => {
            return [...prevNotes, note];
        })
    }

    // When 'delete' is clicked, the current note is removed
    function deleteNote(id){
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div>
            <Header />
            <CreateArea 
                onAdd={addNote}/>
                {notes.map((noteItem, index) => (
                    <Note 
                        key={index}
                        id={index}
                        title={noteItem.title}
                        content={noteItem.content}
                        onDelete={deleteNote}
                    />
                ))}
            <Footer />
        </div>
    );
}


export default App;