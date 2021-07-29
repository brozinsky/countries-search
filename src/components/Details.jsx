import React from 'react'
import { useParams } from "react-router-dom"
import { AppContext } from '../contexts/AppContext'

const Details = () => {
    const { id } = useParams()
    const { state, } = React.useContext(AppContext);
    const country = state.countries.find(country => country.id == id)
    const { name, currencies, capital } = country

    return (
        <div className="details">
            <h2>{name}</h2>
            {currencies.map(({ code, name, symbol }, index) => {
                return (
                    <div key={index}
                        className="currencydata">
                        Currency: {name} - {code}  ({symbol})
                    </div>
                )
            })}
            {capital
                ? <div>Capital: {capital}</div>
                : null}
        </div>
    )
}

export default Details