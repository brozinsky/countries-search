import React from 'react'
import PaginationBtn from './PaginationBtn'
import './Pagination.css'

const Pagination = () => {
    return (
        <div className='pagination'>
            <PaginationBtn number={'<'} />
            <div>...</div>
            <PaginationBtn number={2} />
            <PaginationBtn number={3} />
            <PaginationBtn number={4} />
            <div>...</div>
            <PaginationBtn number={'>'} />
        </div>
    )
}

export default Pagination
