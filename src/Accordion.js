import React,{useState} from 'react'

import {MdRemove,MdAdd} from 'react-icons/md'
export default function Accordion( {id, title, info}) {

     const [showInfo, setShowInfo] = useState(false);    
    
    return (
       
                   <article className="question">
                        <header>
                        <h4>{title} </h4>
                         <button className="btn" onClick={()=> setShowInfo(!showInfo)}>{showInfo ? <MdRemove/>  :<MdAdd/> }</button>
                        </header>
                         {info && showInfo ? info : ""}
                            
                    </article>
                    
      
    )
}
