
import { useEffect } from 'react'
import './App.css'
import { useFetch } from './hook/useFetch'
import { InfoLocation } from './components/InfoLocation'
import { CardCharacter } from './components/CardCharacter'

function App() {

  const randomIdLocation = Math.floor(Math.random() * 126) + 1
  const url = `https://rickandmortyapi.com/api/location/${randomIdLocation}`
  const [location, getLocation] = useFetch(url)


  useEffect(() => {
    getLocation()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


/*   console.log(location) */

  return (
    <div>
      <h1>Rick and Morty</h1>
      <InfoLocation location={location}></InfoLocation>
      <div>
        {
          location?.residents.map(url => (
            <CardCharacter 
              key={url}
              url={url}
            ></CardCharacter>
          ))
        }
      </div>
    </div>
  )
}

export default App
