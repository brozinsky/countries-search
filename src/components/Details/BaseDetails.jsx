import React from 'react'

const BaseDetails = ({ data, isLoading }) => {
    const { capital, currencies } = data

    return (
        !isLoading
            ?
            <div>
                <h3 className="details__subtitle"> <strong className="details__strong">Capital</strong> : {capital}</h3>
                {currencies.map(({ code, name, symbol }, index) => {
                    return (
                        <h3 key={index}
                            className="details__currency">
                            <strong className="details__strong">Currency:</strong> {name} - {code}  ({symbol})
                        </h3>
                    )
                })}
            </div >
            : <p>loading more...</p>
    )
}

export default BaseDetails