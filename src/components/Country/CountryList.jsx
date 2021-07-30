import React from 'react'
import { AppContext } from '../../contexts/AppContext'
import Country from './Country'
import { useFetch } from '../../actions/useFetch'
import './Country.css';

const allAPI = 'https://restcountries.eu/rest/v2/all'

const CountryList = () => {
    const { state, setState } = React.useContext(AppContext);
    const { countryNames, currentPage, countriesPerPage } = state
    // const [loading, seLoading] = React.useState(false);

    const { loadingStatus, data } = useFetch('all', allAPI)

    React.useEffect(() => {
        if (data)
            setState(prevState => {
                return {
                    ...prevState,
                    countryNames: data
                }
            })
    }, [data, setState])


    const lastCountryIndex = currentPage - countriesPerPage
    const firstCountryIndex = lastCountryIndex - countriesPerPage
    let currentCountries = countryNames.length < 20
        ? countryNames.slice(firstCountryIndex, lastCountryIndex)
        : countryNames

    // React.useEffect(() => {
    //     seLoading(true)
    //     if (countryNames.length > 20) {
    //         const pagesNumber = lastCountryIndex
    //         setState(prevState => {
    //             return {
    //                 ...prevState,
    //                 pages: pagesNumber
    //             }
    //         })
    //         seLoading(false)
    //     }
    // }, [])



    return (
        <div className="country__list">
            <hr style={{ width: '100%' }} />
            Results:
            {!loadingStatus
                ? currentCountries.map(({ name, id }, index) => {
                    return <Country key={index} name={name} id={id} />
                })
                : <p>loading...</p>}
        </div>
    )
}

export default CountryList