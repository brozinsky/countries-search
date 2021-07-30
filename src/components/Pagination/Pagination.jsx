import React from 'react'
import PaginationBtn from './PaginationBtn'
import './Pagination.css'
import { AppContext } from '../../contexts/AppContext'

const Pagination = () => {
    const { state, setState } = React.useContext(AppContext);

    return (
        <div className='pagination'>
            <PaginationBtn number={'<'} />
            <div>...</div>
            <PaginationBtn number={2} />
            <PaginationBtn number={3} />
            <PaginationBtn number={4} />
            <div>...</div>
            <PaginationBtn number={state.pages} />
        </div>
    )
}

export default Pagination
