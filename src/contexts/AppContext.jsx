import React, { useState, createContext } from 'react';

const defaultValues = {
    state: {
        currentPage: 1,
        pages: null,
        countriesPerPage: 20,
        countryNames: [],
        countryData: {
            currencies: [],
            capital: '',
            population: '',
            subregion: '',
            region: '',
            flag: '',
            languages: []
        },
    },
    setState: state => { } // noop default callback
};

export const AppContext = createContext(defaultValues);

export const AppProvider = (props) => {
    const [state, setState] = useState(defaultValues.state);

    return (
        <AppContext.Provider value={{ state, setState }}>
            {props.children}
        </AppContext.Provider>
    );
};
