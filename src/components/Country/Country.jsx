import React from 'react'
import { Link } from "react-router-dom"
import './Country.css';

const Country = ({ name, id }) => {
    return (
        <Link to={`/${id}`} className="country__item">
            {name}
        </Link>
    )
}

export default Country