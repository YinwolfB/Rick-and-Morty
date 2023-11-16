/* eslint-disable react/prop-types */
export const InfoLocation = ({ location }) => {
    return (
        /**- Se debe renderizar la siguiente información de la location:
          - Nombre de la location.
          - Tipo de location.
          - Dimensión a la que pertenece esa location.
          - Cantidad de residentes que tiene la location.
         */

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
