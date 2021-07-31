import React from 'react'

const BaseDetails = ({ data, isLoading }) => {
    const { capital, currencies } = data

    return (
        !isLoading
            ?
            <div>
                <h3 className="details__subtitle"> <strong className="details__strong">Capital</strong> : {capital}</h3>
                <ul
                    className="details__list">
                    <strong className="details__strong">Currency:</strong>
                    {currencies.map(({ code, name, symbol }, index) => {
                        return (
                            <li className='details__list-item' key={index}>   - {name} - {code}({symbol})</li>
                        )
                    })}
                </ul>

            </div >
            : <div className="loading">loading</div>
    )
}

export default BaseDetails