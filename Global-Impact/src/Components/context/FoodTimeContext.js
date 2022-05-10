import { createContext } from 'react';

const FoodTimeContext = createContext({
    token: null,
    setToken: () => {},
})

export default FoodTimeContext