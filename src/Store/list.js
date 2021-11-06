import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Context from './Context';

const List = () => {
    const { globale, actions } = useContext(Context);

    return (
        <div>
            <h3>State Value: {globale.value}</h3>
            <h3>Token Value: {globale.token}</h3>
            <h3>levelid Value: {globale.levelId}</h3>
            <Link to="/form1" >to form</Link>
            <button onClick={() => (
                actions({
                    type: 'setToken',
                    payload: { ...globale, token: "new value from list" }
                })
            )}>click me to change token</button>


        </div>
    )
}
export default List;