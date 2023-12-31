
import { useEffect, useRef, useState } from 'react'
import './App.css'
import { useFetch } from './hook/useFetch'
import { InfoLocation } from './components/InfoLocation'
import { CardCharacter } from './components/CardCharacter'
import { CardLoading } from './components/CardLoading'

function App() {

  const [locationId, setLocationId] = useState(Math.floor(Math.random() * 126) + 1)

  const url = `https://rickandmortyapi.com/api/location/${locationId}`
  const [location, getLocation, isLoading, hasError,loading] = useFetch(url)


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
    <div className='app'>
      <h1 className='app__title'> <img src="https://static.displate.com/brand/layout/3134386d-c57f-4bb8-882e-6c4aee42dd49/headerDesktopStandard.jpg" alt="" /> </h1>
      <form className='app__form' onSubmit={handleLocation}>
        <input className='app__input' ref={inputLocation} type="text" />
        <button className='app__btn'>Search</button>
      </form>
      {
        isLoading
          ? <div><CardLoading loading={loading}/> </div>
          : (
            hasError || locationId === '0'
              ? <h2 className='app__error'>❌ Hey❗️ You must provide an id from 1 to 126 ❌</h2>
              : (
                <>
                  <InfoLocation location={location}></InfoLocation>

                  <div className='app__card--container'>
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
