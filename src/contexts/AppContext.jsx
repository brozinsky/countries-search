import React, { useState, createContext } from 'react';

const defaultValues = {
    state: {
        countries: [
            {
                name: '',
                currencies: [],
                capital: '',
            }
        ],
        countyNames: []
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
