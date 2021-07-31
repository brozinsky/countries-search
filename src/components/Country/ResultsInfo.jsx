
import React from 'react'
import { AppContext } from '../../contexts/AppContext'

const ResultsInfo = () => {
    const { state } = React.useContext(AppContext);
    const { searchValue, searchedCountries } = state

    return (
        <>
            <div className="country__info">
                {searchedCountries === 0 || searchValue === ''
                    ? 'Enter searched phrase'
                    : 'No matched data'}
            </div>
        </>
    )
}

export default ResultsInfo