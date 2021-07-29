import React from 'react'
import { AppContext } from '../contexts/AppContext'
import Country from '../components/Country'

const HomePage = () => {
    const { state, } = React.useContext(AppContext);

    return (
        <>
            {state.countries.length > 0
                ? state.countries.map(({ name, id }, index) => {
                    return <Country key={index} name={name} id={id} />
                })
                : <p>loading...</p>}
        </>
    )
}

export default HomePage
