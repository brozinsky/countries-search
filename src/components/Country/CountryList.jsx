import React from 'react'
import { AppContext } from '../../contexts/AppContext'
import Country from './Country'
import { useFetch } from '../../actions/useFetch'
import './Country.css';

const allAPI = 'https://restcountries.eu/rest/v2/all'

const CountryList = () => {
    const { state, setState } = React.useContext(AppContext);
    const { searchValue, countryNames, currentPage, countriesPerPage, allCountriesCount, searchedCountries } = state

    const { loadingStatus, data } = useFetch('all', allAPI)

    // update pages count
    React.useEffect(() => {
        if (!loadingStatus) {
            const pageNumbers = []
            let maxCountries = allCountriesCount
            if (searchValue !== '' && searchedCountries !== null) maxCountries = searchedCountries.length
            for (let i = 1; i <= Math.ceil(maxCountries / countriesPerPage); i++) {
                pageNumbers.push(i)
            }
            setState((prevState) => {
                return {
                    ...prevState,
                    pages: pageNumbers
                }
            })
        }
    }, [countryNames, searchedCountries])


    React.useEffect(() => {
        if (data) {
            let currentCountries
            const lastCountryIndex = currentPage * countriesPerPage
            const firstCountryIndex = lastCountryIndex - countriesPerPage
            if (searchValue !== '' && searchedCountries !== null) currentCountries = searchedCountries.slice(firstCountryIndex, lastCountryIndex)
            else currentCountries = data.slice(firstCountryIndex, lastCountryIndex)
            currentCountries.sort((a, b) => a.name.localeCompare(b.name))
            setState(prevState => {
                return {
                    ...prevState,
                    firstCountryIndex,
                    lastCountryIndex,
                    allCountriesCount: data.length,
                    countryNames: currentCountries
                }
            })
        }
    }, [data, setState, currentPage, countriesPerPage, searchedCountries, searchValue])

    return (
        <div className="country__list">
            <div className="country__list-title"> Results:</div>
            {!loadingStatus
                ? countryNames.map(({ name, id }, index) => {
                    return <Country key={index} name={name} id={id} />
                })
                : <div className="loading">loading...</div>}
        </div>
    )
}

export default CountryList