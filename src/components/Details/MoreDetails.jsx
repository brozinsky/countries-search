import React from 'react'

const MoreDetails = ({ data, name, isLoading }) => {
    const { population, subregion, region, flag, languages } = data

    return (
        !isLoading
            ?
            <div className="details__more">
                <img className="details__flag" src={flag} alt={name} />
                <h4 className="details__info"> <strong className="details__strong">Population:</strong> {population}</h4 >
                <h4 className="details__info"> <strong className="details__strong">Subregion:</strong> {subregion}</h4>
                <h4 className="details__info"><strong className="details__strong">Region:</strong> {region}</h4>
                <ul className="details__list"> <strong className="details__strong">Languages:</strong>
                    {languages.map(({ name, nativeName }, index) => {
                        return (
                            <li key={index}
                                className="details__list-item">
                                - {name} ({nativeName})
                            </li>
                        )
                    })}</ul>
            </div >
            : <div className="loading">loading more...</div>
    )
}

export default MoreDetails