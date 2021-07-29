import React from 'react'
import { Link } from "react-router-dom"

const Country = ({ name, id }) => {
    return (
        <div>
            <Link to={`/${id}`} className="country-item">
                {name}
            </Link>

        </div>
    )
}

export default Country
