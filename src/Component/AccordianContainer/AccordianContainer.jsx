import React, { useState } from 'react'
import Accordian from '../Accordian/Accordian'
import { data } from '../Accordian/accordianData'
import './AccordianContainer.css'

function AccordianContainer() {
    
  const [activeId, setActiveId] = useState(null);

  function toggleActive(id) {
    if (activeId === id) {
      setActiveId(null);
    } else {
      setActiveId(id);
    }
  }
    return (
        <div className="accordian_container">
            {
                data.map((list, i)=> {
                    return <Accordian key={list.header} data={list} id={i + 1} toggleActive={toggleActive} activeId={activeId}/>
                })
            }
        </div>
    )
}

export default AccordianContainer
