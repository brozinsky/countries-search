import React from 'react'
import PanelSearch from './PanelSearch'
import PanelFilter from './PanelFilter'
import './Panel.css'

const Panel = () => {
    return (
        <div className="panel">
            <PanelSearch />
            <PanelFilter />
        </div>
    )
}

export default Panel
