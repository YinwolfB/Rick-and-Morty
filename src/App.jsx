
import { useEffect } from 'react'
import './App.css'
import { useFetch } from './hook/useFetch'

function App() {

  const randomIdLocation = Math.floor(Math.random() * 126) + 1
  const url = `https://rickandmortyapi.com/api/location/${randomIdLocation}`
  const [location, getLocation] = useFetch(url)

  useEffect(() => {
    getLocation()
  }, [])


  console.log(location)

  return (
    <h2>Rick and Morty</h2>
  )
}

export default App
