import React from 'react'
import './Maybox.css'
import ActionButtons from './ActionButtons'
import ImgHandler from './ImgHandler'
import {Component} from 'react'

function Maybox(props) {
    return (
        <div className="app-container">
            <div className="app-wrapper">
                    <div className="frameData">
                    <ActionButtons/>
                    </div>
            </div>
        </div>
        
    )
}

export default Maybox
