import React from 'react'
import { AppContext } from '../../contexts/AppContext'

const namesAPI = 'https://restcountries.eu/rest/v2/name/'

const PanelSearch = () => {
    const { state, setState } = React.useContext(AppContext);
    const { searchValue } = state

    const handleChange = (e) => {
        const newValue = e.target.value
        const searchAPI = namesAPI + newValue
        setState(prevState =>
        ({
            ...prevState,
            searchValue: newValue,
        }))
        if (newValue !== '') getNames(searchAPI)
    }

    const getNames = (API) => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => {
                if (data.length > 0) {
                    setState(prevState => {
                        const dataArr = data.map(({ name }) => {
                            const urlName = name.replace(/\s+/g, '-').toLowerCase()
                            return { name, id: urlName }
                        });
                        return {
                            ...prevState,
                            searchedCountries: dataArr
                        }
                    })
                } else {
                    setState(prevState => {
                        return {
                            ...prevState,
                            searchedCountries: []
                        }
                    })
                }
            })
    }

    return (
        <form>
            <input
                value={searchValue}
                className="panel__search-input"
                type="text"
                onChange={handleChange}
                placeholder="Search for a country..."
            />
        </form>
    )
}

export default PanelSearch