import React from 'react'
import PaginationBtn from './PaginationBtn'
import './Pagination.css'
import { AppContext } from '../../contexts/AppContext'

const Pagination = () => {
    const { state, } = React.useContext(AppContext);
    const { pages, searchValue } = state

    return (
        <nav >
            <ul className='pagination'>
                {pages !== null && searchValue !== ''
                    ? pages.map(number => (
                        <PaginationBtn key={number} className='pagination__item' number={number} />
                    ))
                    : null
                }
            </ul>
        </nav>
    )
}

export default Pagination
