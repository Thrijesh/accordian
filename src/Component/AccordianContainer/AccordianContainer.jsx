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
  const objToArray = Object.entries(data[0].config.zoneConfig).map(e => {
    return {
      id: e[0],
      details: e[1]
    }
  })

  console.log(objToArray)

  
  return (
    <div className="accordian_container">
            {
              objToArray.map((list, i)=> {
                  const plansToArray = Object.entries(list.details.plans).map(e => {
                    return {
                      id: e[0],
                      plans: e[1]
                    }
                  })
                  console.log(plansToArray)
                    return <Accordian key={list.id} data={list} plans={plansToArray} toggleActive={toggleActive} activeId={activeId}/>
                })
            }
        </div>
    )
}

export default AccordianContainer
