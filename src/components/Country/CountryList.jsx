import React from 'react'
import { AppContext } from '../../contexts/AppContext'
import Country from './Country'
import ResultsInfo from './ResultsInfo'
import { useFetch } from '../../actions/useFetch'
import './Country.css';

const nameAPI = 'https://restcountries.eu/rest/v2/name/'

const CountryList = () => {
    const { state, setState } = React.useContext(AppContext);
    const { searchValue, countryNames, currentPage, countriesPerPage, searchedCountries } = state

    const searchAPI = nameAPI + searchValue
    const { loadingStatus, data } = useFetch('search', searchAPI)

    // update pages count
    React.useEffect(() => {
        if (!loadingStatus) {
            let pageNumbers = []
            let maxCountries
            if (searchValue !== '' && searchedCountries !== null) {
                maxCountries = searchedCountries.length
                for (let i = 1; i <= Math.ceil(maxCountries / countriesPerPage); i++) {
                    pageNumbers.push(i)
                }
            }
            setState((prevState) => {
                return {
                    ...prevState,
                    pages: pageNumbers
                }
            })
        }
    }, [countryNames, searchedCountries])

    // update countries data
    React.useEffect(() => {
        if (data) {
            const lastCountryIndex = currentPage * countriesPerPage
            const firstCountryIndex = lastCountryIndex - countriesPerPage
            const currentCountries = data.slice(firstCountryIndex, lastCountryIndex)
            currentCountries.sort((a, b) => a.name.localeCompare(b.name))
            setState(prevState => {
                return {
                    ...prevState,
                    firstCountryIndex,
                    lastCountryIndex,
                    allCountriesCount: data.length,
                    countryNames: currentCountries,
                    searchedCountries: data
                }
            })
        }
    }, [data, searchedCountries, searchValue, currentPage])

    return (
        <div className="country__list">
            <div className="country__list-title"> Results:</div>
            {searchedCountries !== null && searchedCountries.length !== 0 && searchValue !== ''
                ? countryNames.map(({ name, id }, index) => {
                    return <Country key={index} name={name} id={id} />
                })
                : <ResultsInfo />}
            {/* {!loadingStatus
                ? countryNames.map(({ name, id }, index) => {
                    return <Country key={index} name={name} id={id} />
                })
                : null} */}
        </div>
    )
}

export default CountryList