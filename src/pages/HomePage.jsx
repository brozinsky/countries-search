import React from 'react'
import CountryList from '../components/Country/CountryList'
import Panel from '../components/Panel/Panel'
import Pagination from '../components/Pagination/Pagination'

const HomePage = () => {

    return (
        <>
            <Panel />
            <CountryList />
            <Pagination />
        </>
    )
}

export default HomePage
