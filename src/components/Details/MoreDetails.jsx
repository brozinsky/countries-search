import React from 'react'

const MoreDetails = ({ data, name, isLoading }) => {
    const { population, subregion, region, flag, languages } = data

    return (
        !isLoading
            ?
            <div className="details__more">
                <h3 className="details__info"> <strong className="details__strong">Population:</strong> {population}</h3 >
                <h3 className="details__info"> <strong className="details__strong">Subregion:</strong> {subregion}</h3>
                <h3 className="details__info"><strong className="details__strong">Region:</strong> {region}</h3>
                <img className="details__flag" src={flag} alt={name} />
                <h3 className="details__info"> <strong className="details__strong">Languages:</strong>
                    {languages.map(({ name, nativeName }, index) => {
                        return (
                            <h3 key={index}
                                className="details__currency">
                                {name} ({nativeName})
                            </h3>
                        )
                    })}</h3>
            </div >
            : <p>loading more...</p>
    )
}

export default MoreDetails