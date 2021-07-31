import React from 'react'
import { AppContext } from '../../contexts/AppContext'

const PanelSearch = () => {
    const { state, setState } = React.useContext(AppContext);
    const { searchValue } = state

    const handleChange = (e) => {
        const newValue = e.target.value
        setState(prevState =>
        ({
            ...prevState,
            searchValue: newValue,
        }))
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