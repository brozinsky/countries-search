import React from 'react'
import { AppContext } from '../../contexts/AppContext'

const PanelSearch = () => {
    const { setState } = React.useContext(AppContext);

    const handleChange = (e) => {
        const newValue = e.target.value

        setState(prevState =>
        ({
            ...prevState,
            searchValue: newValue
        }))
    }

    return (
        <form>
            <input className="panel__search-input"
                ype="text" onChange={handleChange}
                placeholder="Search for a country..."
            />
            <button className="panel__search-button"
                type="submit">Search</button>
        </form>
    )
}

export default PanelSearch
