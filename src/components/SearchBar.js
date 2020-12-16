import React, { useState } from 'react'

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState('')

  const onFormSubmit = (e) => {
    e.preventDefault()
    onSubmit(term)
  }

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder="Search videos.."
          />
        </div>
      </form>
    </div>
  )
}

export default SearchBar
