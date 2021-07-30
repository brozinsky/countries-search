import React from 'react'
import { AppContext } from '../../contexts/AppContext'

const PaginationBtn = ({ number }) => {
    const { state, setState } = React.useContext(AppContext);

    const handleClick = () =>
        setState(prevState => {
            return {
                ...prevState,
                currentPage: number
            }
        })

    return (
        <li className='pagination__li'>
            <button onClick={handleClick}
                className={`pagination__item
                ${number === state.currentPage ? 'pagination__item--active' : ''}`}>
                {number}
            </button>
        </li>
    )
}

export default PaginationBtn