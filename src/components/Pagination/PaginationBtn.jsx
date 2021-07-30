import React from 'react'

const PaginationBtn = ({ number }) => {
    return (
        <button className='pagination__button'>
            {number}
        </button>
    )
}

export default PaginationBtn
