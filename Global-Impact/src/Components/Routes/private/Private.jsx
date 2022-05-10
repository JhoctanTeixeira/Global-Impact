import React, {useContext} from 'react'
import {Route, Redirect} from 'react-router-dom'
import TimeFoodContext from '../../context/FoodTimeContext'


const RoutesPrivate = ({component: Component, ...rest}) => {

    const { token } = useContext(TimeFoodContext)

return(

<Route {...rest} render={()=> token
    ?
    <Component {...rest} />
    :
    <Redirect to="/index"/> 
}/>
)}

export default RoutesPrivate;