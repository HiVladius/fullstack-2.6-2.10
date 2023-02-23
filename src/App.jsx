import { useState } from 'react'
import Note from './Components/Note'
import Guia_telefonica from "./Components/guia-telefonica"

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(false)

  const addNote = (event) => { // This is the function that adds a new note
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5,
      id: notes.length + 1,
    }

    setNotes(notes.concat(noteObject))
    setNewNote('')
  }

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important)

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}> 
          show {showAll ? 'important' : 'all' } 
        </button>
      </div> 
      <ul>
        <ul>
          {notesToShow.map(note => // This is the list of notes
            <Note key={note.id} note={note} />// This is the Note component
          )}
        </ul>
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>

      <Guia_telefonica />
    </div>
  )
}

export default App