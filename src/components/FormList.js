import React from 'react'
import Input from '../components/Input'

export default function formList(props) {
    return (
        <div>
               {props.placeholder.map((value,index)=>{
                    return <Input stringVal={value}/>
                })}
           
        </div>
    )
}
