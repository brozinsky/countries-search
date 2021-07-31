import React from 'react'
import { useParams } from "react-router-dom"
import { AppContext } from '../../contexts/AppContext'
import BaseDetails from './BaseDetails'
import MoreDetails from './MoreDetails'
import { Link } from "react-router-dom"
import { useFetch } from '../../actions/useFetch'
import './Details.css'

const namesAPI = 'https://restcountries.eu/rest/v2/name/'

const Details = () => {
    const { id } = useParams()
    const { state, setState } = React.useContext(AppContext);
    const countryName = state.countryNames.find(country => country.id === id)
    const [loadingMore, setLoadingMore] = React.useState(false)
    const [loadMore, setLoadMore] = React.useState(false)
    const thisCountryApi = namesAPI + countryName.name

    const { loadingStatus, data } = useFetch('base-details', thisCountryApi)

    React.useEffect(() => {
        if (loadingStatus)
            console.log(loadingStatus)
    }, [loadingStatus])

    React.useEffect(() => {
        if (data) {
            const { capital, currencies } = data
            setState(prevState => {
                return {
                    ...prevState,
                    countryData: {
                        ...prevState.countryData,
                        capital, currencies
                    }
                }
            })

        }
    }, [data, setState])

    const handleClick = () => {
        setLoadingMore(true)
        setLoadMore(true)
        getMoreDetails(thisCountryApi)
    }

    const getMoreDetails = (API) => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => {
                setState(prevState => {
                    const { population, subregion, region, flag, languages } = data[0]
                    return {
                        ...prevState,
                        countryData: {
                            ...prevState.countryData,
                            population, subregion, region, flag, languages
                        }
                    }
                })
                setLoadingMore(false)
            })
    }

    return (
        <section className="details">
            <Link to={`/`} className="details__back-btn">
                {"< Back"}
            </Link>
            <h2 className="details__title">{countryName.name}</h2>
            < BaseDetails data={state.countryData} isLoading={loadingStatus} />
            {loadMore ? < MoreDetails name={countryName.name} data={state.countryData} isLoading={loadingMore} />
                : null}
            {!loadMore ? <button
                onClick={handleClick}
                className="details__more-btn">Load more...</button> : null}
        </section >
    )
}

export default Details