import React from 'react'
import "./Accordian.css"
import { BsTrash } from 'react-icons/bs'
import { FaEdit } from 'react-icons/fa'

function Accordian({ data, toggleActive, activeId, plans }) {
    return (
        <div className="accordian">
            <div className={activeId === data.id ? "accordian_header active" : "accordian_header"} onClick={() => toggleActive(data.id)}>
                <header>{data.details.zoneId}</header>
            </div>
            {
                activeId === data.id ?
                plans && plans.map(plan => {
                        return <div className="accordian_body">
                            <div className="accordian_body_address">
                                <p>{plan.plans.planId}</p>
                                <div className="accordian_body_address_btn_container">
                                    <button><FaEdit /></button>
                                    <button><BsTrash /></button>
                                </div>
                            </div>
                            <div className="accordian_body_details">
                                <div className="accordian_body_details_div">
                                    <div className='accordian_body_details_header'>
                                        <header>Minimun Order Value</header>
                                    </div>
                                    <div className='accordian_body_details_values'>
                                        <header>{plan.plans.initialPrice}</header>
                                    </div>
                                </div>
                                <div className="accordian_body_details_div">
                                    <div className='accordian_body_details_header'>
                                        <header>Delivery Rate</header>
                                    </div>
                                    <div className='accordian_body_details_values'>
                                        <header>{`LKR.${plan.plans.additionalUnitPrice}`}</header>
                                    </div>
                                </div>
                                <div className="accordian_body_details_div">
                                    <div className='accordian_body_details_header'>
                                        <header>Delivery Estimation</header>
                                    </div>
                                    <div className='accordian_body_details_values'>
                                        <header>{plan.plans.deliveryDuration}</header>
                                    </div>
                                </div>
                                <div className="accordian_body_details_div">
                                    <div className='accordian_body_details_header'>
                                        <header>Waive off delivery cost if order value is higher than</header>
                                    </div>
                                    <div className='accordian_body_details_values'>
                                        <header>{`LKR.${plan.plans.initialWeight}`}</header>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                    :
                    null
            }
        </div>
    )
}

export default Accordian
