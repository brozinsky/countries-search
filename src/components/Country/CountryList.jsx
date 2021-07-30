import React from 'react'
import { AppContext } from '../../contexts/AppContext'
import Country from './Country'
import './Country.css';

const CountryList = () => {
    const { state, } = React.useContext(AppContext);
    const { countryNames, currentPage, countriesPerPage } = state

    const lastCountryIndex = currentPage - countriesPerPage
    const firstCountryIndex = lastCountryIndex - countriesPerPage
    const currentCountries = countryNames.slice(firstCountryIndex, lastCountryIndex)

    return (
        <div className="country__list">
            {currentCountries.length > 0
                ? currentCountries.map(({ name, id }, index) => {
                    return <Country key={index} name={name} id={id} />
                })
                : <p>loading...</p>}
        </div>
    )
}

export default CountryList