import axios from 'axios';
import React, { useEffect } from 'react'

export default function ProfileNew() {
    const api = "https://staging.languagebest.com/api/users/info";
    const token = localStorage.getItem('userToken');

    async function getData() {
        try {
            const response = await axios.get(api, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            console.log(response);
            return response;

        }

        catch (error) {
            console.log(error)
        }
    }
    useEffect(
        () => {
            getData();
        }
    )

    return (
        <div>
            profile new
        </div>
    )
}
