import React from 'react'
import FoodTimeContext from '../context/FoodTimeContext'
import useStorage from '../../utils/useStorage'

const Provider = ({children}) => {

    const [token, setToken] = useStorage('token');


   return(
      <FoodTimeContext.Provider value={{token, setToken}}>
        {children}
      </FoodTimeContext.Provider>
)}

export default Provider