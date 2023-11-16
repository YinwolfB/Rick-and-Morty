/* eslint-disable react/prop-types */
export const InfoLocation = ({ location }) => {
    return (
        <article>
            <h2>{location?.name}</h2>
            <ul>
                <li><span>Type: </span><span>{location?.type}</span></li>
                <li><span>Dimension: </span>{location?.dimension}<span></span></li>
                <li><span>Population: </span>{location?.residents.length}<span></span></li>
            </ul>
        </article>
    )
}
