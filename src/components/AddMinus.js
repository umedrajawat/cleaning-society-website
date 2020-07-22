import React from 'react'

export default function AddMinus(props) {
    const [counts,setCount]=React.useState(0);
    return (
        <div className="addminus" >
            <button onClick={()=>setCount(counts+1)}>+</button>
                <p>{counts}</p>
            <button onClick={()=>setCount(counts-1)}>-</button>
        </div>
    )
}
