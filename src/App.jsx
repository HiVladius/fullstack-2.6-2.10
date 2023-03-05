import axios from 'axios'
import { useState, useEffect } from 'react'
import Note from './Components/Note'
//import Guia_telefonica from "./Components/guia-telefonica"

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(false)
  
  const hook = () => {
    console.log('effect')
    axios.get('http://localhost:3001/notes').then(response => {
      console.log('promise fulfilled')
      setNotes(response.data)
    })
  }
  useEffect(hook, [])
  


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

      
    </div>
  )
}

export default App