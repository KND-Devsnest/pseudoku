import React from 'react'

const Box = ({value, setValue}) => {
    return (
        <div style={{border:'1 px solid black'}}>
            {value !== 0 ?
            value    : 
            <input type='number' onChange={(e) => {setValue(parseInt(e.target.value))}} />}
        </div>
    )
}

export default Box
