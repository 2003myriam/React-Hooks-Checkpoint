import React from 'react'

function Filtre({ setMinNote, setSearchTitle }) {
  return (
    <div>

      <input
        type="text"
        placeholder="Titre..."
        onChange={(e) => setSearchTitle(e.target.value)}
      />

      <select onChange={(e) => setMinNote(Number(e.target.value))}>
        <option value="0">Toutes les notes</option>
        <option value="5">5+</option>
        <option value="6">6+</option>
        <option value="7">7+</option>
        <option value="8">8+</option>
        <option value="9">9+</option>
      </select>

    </div>
  )
}

export default Filtre