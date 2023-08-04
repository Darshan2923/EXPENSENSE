import React from 'react';
import { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

//Initial state
const initialState = {
    transactions: [
        //Dummy transactions
        { id: 1, text: 'flower', amount: -20 },
        { id: 2, text: 'salary', amount: 300 },
        { id: 3, text: 'book', amount: -10 },
        { id: 4, text: 'camera', amount: 150 },
    ]
}

//Crete context

export const GlobalContext = createContext(initialState);

//Providercomponents
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (<GlobalContext.Provider value={{
        transactions: state.transactions
    }}>
        {children}
    </GlobalContext.Provider>);
}