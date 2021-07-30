import React from 'react'

const PanelFilter = () => {
    return (
        <label className="panel__filter-label"> FIlter by:
            <select className="panel__filter"
                id="filter">
                <option value="name-asc">Name (a-z)</option>
                <option value="name-desc">Name (z-a)</option>
            </select>
        </label>
    )
}

export default PanelFilter