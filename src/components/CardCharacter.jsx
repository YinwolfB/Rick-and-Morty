/* eslint-disable react-hooks/exhaustive-deps */
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
        <article>
            <header>
                <img src={resident?.image} alt="" />
                <div>
                    <div className="circle"></div>
                    <span>{resident?.status}</span>
                </div>
            </header>
            <section>
                <h3>{resident?.name}</h3>
                <hr />
                <ul>
                    <li><span>Specie </span><span>{resident?.species}</span></li>
                    <li><span>Origin </span><span>{resident?.origin.name}</span></li>
                    <li><span>Episodes where appear </span><span>{resident?.episode.length}</span></li>
                </ul>
            </section>
        </article>
    )
}
