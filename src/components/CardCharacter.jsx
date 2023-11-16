import { useEffect } from "react"
import { useFetch } from "../hook/useFetch"

// eslint-disable-next-line react/prop-types
export const CardCharacter = ({ url }) => {
    
    const [resident, getResident] = useFetch(url)

    useEffect(() => {
        getResident()
    }, [])

    console.log(resident)

    return (
        <div>CardCharacter</div>
    )
}
