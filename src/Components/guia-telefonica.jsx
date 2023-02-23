import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', phone: '123456789' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [ searchName, setSearchName ] = useState('')

  //addPerson function
  const addPerson = (event) => {
    event.preventDefault()
    if (newName.trim() === '' || newPhone.trim() === '') {
      window.alert('Por favor, introduce un nombre y un número de teléfono')
      return
    }
    // Create a new person object
    const personObject = {
        name: newName,
        phone: newPhone,
        id: persons.length + 1,
    }

    // Check if the name already exists
    const nameExists = persons.some(person => person.name === newName)
    if (nameExists) {
      window.alert(`${newName} ya existe en la lista`)
      return
    }

    setPersons(persons.concat(personObject))
    setNewName('')
    setNewPhone('')
  }
  // Handle the name and phone input changes
  const handleNameChange = (event) => {
    const name = event.target.value;
    if(/^[a-zA-Z ]*$/.test(name)) {
      setNewName(name)
    }
  }
  // Handle the name and phone input changes
  const handlePhoneChange = (event) => {
    const phone = event.target.value;
    if(/^[0-9 ]*$/.test(phone)) {
      setNewPhone(phone)
    }
  }
  // Handle the search input changes
  const handleSearchChange = (event) => {
    setSearchName(event.target.value)
  }

  // Filter the list of persons based on the search string
  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(searchName.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <label>Buscar por nombre: </label>
        <input value={searchName} onChange={handleSearchChange} />
      </div>
      <form onSubmit={addPerson}>
        <div>
          <label>Nombre: </label>
          <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <label>Número de teléfono: </label>
          <input value={newPhone} onChange={handlePhoneChange} />
        </div>
        <div>
          <button type="submit">Añadir persona</button>
        </div>
      </form>
      <h2>Lista de personas</h2>
      <ul>
        {filteredPersons.map(person =>
          <li key={person.id}>{person.name} - {person.phone}</li>
        )}
      </ul>
    </div>
  )
}

export default App