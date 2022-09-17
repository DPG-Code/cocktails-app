import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Search() {
  const [ query, setQuery ] = useState('')
  const navigate = useNavigate()
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    navigate(`/search/${query}`)
  }

  const handleChange = (e) => {
    const inputValue = e.target.value
    setQuery(inputValue)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={handleChange}/>
      </form>
    </>
  )
}