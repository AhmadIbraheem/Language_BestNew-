import { useState } from 'react';

const useGlobalState = () => {

    const [globale, setGlobale] = useState({
        value: "ahmad",
        token: "token",
        subLevelId: "subLevel",
        levelId: "levelId",
        email: "",
        list: [],
        tries: "5"
    });
    // const [token, setToken] = useState("");
    const actions = (action) => {
        const { type, payload } = action;
        switch (type) {
            case 'setToken':
                return setGlobale(payload);
            case 'setState':
                return setGlobale(payload);
            case 'setSubLevelId':
                return setGlobale(payload);
            case 'setEmail':
                return setGlobale(payload);
            case 'setTries':
                return setGlobale(payload);
            default:
                return globale;
        }
    }
    return { globale, actions }
}
export default useGlobalState;