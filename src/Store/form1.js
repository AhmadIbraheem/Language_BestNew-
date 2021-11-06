import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Context from './Context';

const Form1 = () => {
    const { globale, actions } = useContext(Context);

    return (
        <>
            <input
                value={globale.value}
                onChange={
                    (e) => {
                        actions({
                            type: 'setState',
                            payload: { ...globale, value: e.target.value }
                        })
                    }
                }
                type="text" />
            <input
                value={globale.token}
                onChange={
                    (e) => {
                        actions({
                            type: 'setToken',
                            payload: { ...globale, token: e.target.value }
                        })
                    }
                }
                type="text" />

            <Link to="/list" >to list</Link><br></br>
            <Link to="/levels" >LEVELS</Link><br></br>
            <Link to="/" >home</Link><br></br>

            <button onClick={() => (
                actions({
                    type: 'setState',
                    payload: { ...globale, value: "new valueeeeeee" }
                })
            )}>click me</button>

        </>
    )
}
export default Form1;