import { useEffect, useState } from 'react';
import Note from './components/Note/index.jsx';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import './App.css';

function App() {
  const noteObj = { title: '', description: '', importance: '' };

  const [note, setNote] = useState(noteObj);
  const [notes, setNotes] = useState([]);

  //Effect to add notes array in local storage.
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  //Save a note with the title and description and put it in notes array.
  const saveNote = () => {
    if (note.title.trim() !== '' && note.description.trim() !== '') {
      setNotes([...notes, note]);
      setNote({ title: '', description: '', importance: '' });

      if (note.importance.trim() == '') {
        setNote({title: '', description: '', importance: ''});
      }
    } else {
      alert('Please, complete the fields.');
    };
  };

  //Delete the note splicing the array.
  const deleteNote = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNote({ ...note, [name]: value });
  };

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Space Pad</h1>

          <input type="text" name="title" value={note.title} onChange={handleInputChange} placeholder='Title' />
          <input type="text" name="description" value={note.description} onChange={handleInputChange} placeholder='Description' />
          <button id="inf" onClick={saveNote}>ADD NOTE</button>

          {notes.map((item, index) => (
            //<Note title:/>
             
            //   <p>{item.title}</p>
            //   <p>{item.description}</p>
            //   <button onClick={() => deleteNote(index)}>Delete</button>
            // </div>
            <Table striped bordered hover id="tab">
            < div key={index} ></div>
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>State</th>
                <th>#</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>Otto</td>
                <td><button id="de" onClick={() => deleteNote(index)} variant="Danger">Delete</button></td>
              </tr>
            </tbody>
          </Table>
          ))}

        </header>
      </div >
    </>
  );
};

export default App;