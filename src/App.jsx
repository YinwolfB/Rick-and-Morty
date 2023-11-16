
import { useEffect } from 'react'
import './App.css'
import { useFetch } from './hook/useFetch'
import { InfoLocation } from './components/InfoLocation'

function App() {

  const randomIdLocation = Math.floor(Math.random() * 126) + 1
  const url = `https://rickandmortyapi.com/api/location/${randomIdLocation}`
  const [location, getLocation] = useFetch(url)


  useEffect(() => {
    getLocation()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  console.log(location)

  return (
    <><h1>Rick and Morty</h1>
    <InfoLocation location={location}></InfoLocation></>
  )
}

export default App
