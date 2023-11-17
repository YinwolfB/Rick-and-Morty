
import { useEffect, useRef, useState } from 'react'
import './App.css'
import { useFetch } from './hook/useFetch'
import { InfoLocation } from './components/InfoLocation'
import { CardCharacter } from './components/CardCharacter'

function App() {

  const [locationId, setLocationId] = useState(Math.floor(Math.random() * 126) + 1)

  const url = `https://rickandmortyapi.com/api/location/${locationId}`
  const [location, getLocation, isLoading, hasError] = useFetch(url)


  useEffect(() => {
    getLocation()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locationId])

  const inputLocation = useRef()
  const handleLocation = event => {
    event.preventDefault()
    setLocationId(inputLocation.current.value.trim())
  }
  
  return (
    <div>
      <h1>Rick and Morty</h1>
      <form onSubmit={handleLocation}>
        <input ref={inputLocation} type="text" />
        <button>Search</button>
      </form>
      {
        isLoading
          ? <h2>Loading...</h2>
          : (
            hasError || locationId === '0'
              ? <h2>❌ Hey❗️ You must provide an id from 1 to 126 ❌</h2>
              : (
                <>
                  <InfoLocation location={location}></InfoLocation>
                  <strong><hr /></strong> {/* Linea horizontal! !!!❗️  */}
                  <br></br>
                  <strong><hr /></strong> {/* Linea horizontal! !!!❗️ */}
                  <br></br>
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
                </>
              )
          )
      }
    </div>
  )
}

export default App
