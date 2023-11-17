/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import { useFetch } from "../hook/useFetch"
import './styles/CardCharacter.css'

// eslint-disable-next-line react/prop-types
export const CardCharacter = ({ url }) => {

    const [resident, getResident] = useFetch(url)

    useEffect(() => {
        getResident()
    }, [])



    return (
        <article className="resident">
            <header className="resident__header">
                <img className="resident__img" src={resident?.image} alt="" />
                <div className="resident__status">
                    <div className={`resident__status--circle ${resident?.status}`}></div>
                    <span className="resident__status--value">{resident?.status}</span>
                </div>
            </header>
            <section className="resident__body">
                <h3 className="resident__name">{resident?.name}</h3>
                <hr className="resident__separator" />
                <ul className="resident__stat">
                    <li className="resident__stat--item"><span className="resident__stat--label">Specie </span><span className="resident__stat--value">{resident?.species}</span></li>
                    <li className="resident__stat--item"><span className="resident__stat--label">Origin </span><span className="resident__stat--value">{resident?.origin.name}</span></li>
                    <li className="resident__stat--item"><span className="resident__stat--label">Episodes where appear </span><span className="resident__stat--value">{resident?.episode.length}</span></li>
                </ul>
            </section>
        </article>
    )
}
