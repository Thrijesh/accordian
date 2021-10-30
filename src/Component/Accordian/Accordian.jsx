import React from 'react'
import "./Accordian.css"
import { BsTrash } from 'react-icons/bs'
import { FaEdit } from 'react-icons/fa'

function Accordian({ data, id, toggleActive, activeId }) {
    return (
        <div className="accordian">
            <div className={activeId === id ? "accordian_header active" : "accordian_header"} onClick={() => toggleActive(id)}>
                <header>{data.header}</header>
            </div>
            {
                activeId === id ?
                    <div className="accordian_body">
                        <div className="accordian_body_address">
                            <p>
                                {data.desc}
                            </p>
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
                                    <header>500</header>
                                </div>
                            </div>
                            <div className="accordian_body_details_div">
                                <div className='accordian_body_details_header'>
                                    <header>Delivery Date</header>
                                </div>
                                <div className='accordian_body_details_values'>
                                    <header>LKR. 150.00</header>
                                </div>
                            </div>
                            <div className="accordian_body_details_div"> 
                                <div className='accordian_body_details_header'>
                                    <header>Delivery Estimation</header>
                                </div>
                                <div className='accordian_body_details_values'>
                                    <header>5 days</header>
                                </div>
                            </div>
                            <div className="accordian_body_details_div">
                                <div className='accordian_body_details_header'>
                                    <header>Walve off delivery cost if order value is higher than</header>
                                </div>
                                <div className='accordian_body_details_values'>
                                    <header>LKR. 2000.00</header>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    null
            }
        </div>
    )
}

export default Accordian
