import React from 'react'

const BaseDetails = ({ data, isLoading }) => {
    const { capital, currencies } = data

    return (
        !isLoading
            ?
            <div>
                < div > Capital : {capital}</div>
                {currencies.map(({ code, name, symbol }, index) => {
                    return (
                        <div key={index}
                            className="details__currency">
                            Currency: {name} - {code}  ({symbol})
                        </div>
                    )
                })}
            </div >
            : <p>loading more...</p>
    )
}

export default BaseDetails