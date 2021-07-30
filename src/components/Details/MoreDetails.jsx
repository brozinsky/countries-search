import React from 'react'

const MoreDetails = ({ data, name, isLoading }) => {
    const { population, subregion, region, flag, languages } = data

    return (
        !isLoading
            ?
            <div>
                < div > population: {population}</div >
                <div>subregion: {subregion}</div>
                <div>region: {region}</div>
                <img style={{ maxWidth: 300 }} src={flag} alt={name} />
                <div> Languages:
                    {languages.map(({ name, nativeName }, index) => {
                        return (
                            <div key={index}
                                className="details__currency">
                                {name} ({nativeName})
                            </div>
                        )
                    })}</div>
            </div >
            : <p>loading more...</p>
    )
}

export default MoreDetails