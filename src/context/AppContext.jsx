import { createContext, useContext } from 'react';

export const AppContext = createContext('');
export const useAppContext = () => useContext(useAppContext);


export const AppContextProvider = () => {
    return (
        <AppContext.Provider></AppContext.Provider>
    )
}