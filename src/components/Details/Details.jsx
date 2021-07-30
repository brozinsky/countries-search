import React from 'react'
import { useParams } from "react-router-dom"
import { AppContext } from '../../contexts/AppContext'
import BaseDetails from './BaseDetails'
import MoreDetails from './MoreDetails'
import { Link } from "react-router-dom"
import './Details.css'

const namesAPI = 'https://restcountries.eu/rest/v2/name/'

const Details = () => {
    const { id } = useParams()
    const { state, setState } = React.useContext(AppContext);
    const countryName = state.countryNames.find(country => country.id == id)
    const [loading, setLoading] = React.useState(false)
    const [loadingMore, setLoadingMore] = React.useState(false)
    const [loadMore, setLoadMore] = React.useState(false)
    const thisCountryApi = namesAPI + countryName.name

    React.useEffect(() => {
        setLoading(true)
        getBaseDetails(thisCountryApi)
    }, [])

    const handleClick = () => {
        setLoadingMore(true)
        setLoadMore(true)
        getMoreDetails(thisCountryApi)
    }

    const getBaseDetails = (API) => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => {
                setState(prevState => {
                    const { currencies, capital } = data[0]
                    return {
                        ...prevState,
                        countryData: {
                            ...prevState.countryData,
                            currencies, capital
                        }
                    }
                })
                setLoading(false)
            })
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
        <div className="details">
            <Link to={`/`} className="details__back">
                {"< Back"}
            </Link>
            <h2>{countryName.name}</h2>
            < BaseDetails data={state.countryData} isLoading={loading} />
            {loadMore ? < MoreDetails name={countryName.name} data={state.countryData} isLoading={loadingMore} />
                : null}
            {!loadMore ? <button
                onClick={handleClick}
                className="details__more-btn">Load more...</button> : null}
        </div >
    )
}

export default Details