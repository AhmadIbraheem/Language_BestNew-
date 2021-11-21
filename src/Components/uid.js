import React from 'react'

import { v4 as uuidv4 } from 'uuid';
export default function Uid() {
    return (
        <div>
            <h1>uuid generate</h1>
            {uuidv4()}
        </div>
    )
}
