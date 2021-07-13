import React from 'react'
import './ActionButtons.css'
import { Component } from 'react'
import ImgHandler from './ImgHandler'
import mayportrait from '../images/mayimages/mayportrait.png'
import jshit from '../images/mayimages/JShit.png'
import slash from '../images/slash.png'
import punch from '../images/punch.png'
import kick from '../images/kick.png'
import hslash from '../images/hslash.png'
import dust from '../images/dust.png'
import up from '../images/up.png'
import down from '../images/down.png'
import right from '../images/right.png'
import left from '../images/left.png'
import neutral from '../images/neutral.png'
import upright from '../images/upright.png'
import downright from '../images/downright.png'
import updown from '../images/updown.png'
import shoryuken from '../images/shoryuken.png'
import circleback from '../images/circleback.png'
import dolphinup from '../images/dolphinup.png'
import dolphinright from '../images/dolphinright.png'
import yamada from '../images/yamada.png'
import gosha from '../images/gosha.png'

function Egg(props) {
    return <ImgHandler src={props.name} move={props.dir}/>
}

class Express extends React.Component {
    constructor() {
        super();

        this.state = {
            actionButton: 0,
            moveButton: 0,
            hitbox: 0
        }
    }

    handleHitBox = () => {
        if (this.state.hitbox == 0) {
            this.setState({
                hitbox: 1
            })
        } else {
            this.setState({
                hitbox: 0
            })
        }
    }

    handlePunch = () => {
        this.setState({
            actionButton: 0
        })
    }
    handleSlash = () => {
        this.setState({
            actionButton: 1
        })
    }
        
    handleKick = () => {
        this.setState({
            actionButton: 2
        })
    }

    handleHeavy = () => {
        this.setState({
            actionButton: 3
        })
    }
    
    handleDust = () => {
        this.setState({
            actionButton: 4
        })
    }
        handleYamada = () => {
        this.setState({
            actionButton: 5
        })
    }
        handleGosha = () => {
        this.setState({
            actionButton: 6
        })
    }

    handleDown = () => {
        this.setState({
            moveButton: 0
        })
    }

    handleRight = () => {
        this.setState({
            moveButton: 1
        })
    }

    handleUp = () => {
        this.setState({
            moveButton: 2
        })
    }
    handleNeutral = () => {
        this.setState({
            moveButton: 3
        })
    }
    handleDownRight = () => {
        this.setState({
            moveButton: 4
        })
    }
            handleUpDown = () => {
        this.setState({
            moveButton: 5
        })
    }

        handleCircleBack = () => {
        this.setState({
            moveButton: 6
        })
    }
    handleShoryuken = () => {
        this.setState({
            moveButton: 7
        })
    }
            handleHoriDolphin = () => {
        this.setState({
            moveButton: 8
        })
    }
    handleVertDolphin = () => {
        this.setState({
            moveButton: 9
        })
    }

    render() {
        return (
            <div className="all-descriptors">
                <div className="handler">
                    <ImgHandler src={this.state.actionButton} move={this.state.moveButton} hit={this.state.hitbox}/>
                </div>

                <div className="button-container">
                <div className="spacer">
                    <button onClick={this.handleHitBox}>Hitboxes</button>
                </div>

                    <div className="button-wrapper">  
                    <div className="button-holder"/>                  
                        <div className="button-holder">
                            <img src={circleback} alt="CircleBackimage" width="100%" onClick={this.handleCircleBack}/>
                        </div>
                        <div className="button-holder">
                            <img src={up} alt="upimage" width="100%" onClick={this.handleUp}/>
                        </div>
                        <div className="button-holder">
                            <img src={updown} alt="updownimage" width="100%" onClick={this.handleUpDown}/>
                        </div>
                        <div className="button-holder">
                            <img src={dolphinup} alt="updolphinimage" width="100%" onClick={this.handleVertDolphin}/>
                        </div>
                        <div className="button-holder">
                            <img src={left} alt="leftimage" width="100%" onClick={this.handleNeutral}/>
                        </div>
                        <div className="button-holder">
                            <img src={neutral} alt="downimage" width="100%" onClick={this.handleNeutral}/>
                        </div>
                        <div className="button-holder">
                            <img src={right} alt="rightimage" width="100%" onClick={this.handleRight}/>
                        </div>
                        <div className="button-holder">
                            <img src={dolphinright} alt="rightdolphinimage" width="100%" onClick={this.handleHoriDolphin}/>
                        </div>
                        <div className="button-holder">
                            <img src={shoryuken} alt="shoryukenimage" width="100%" onClick={this.handleShoryuken}/>
                        </div>
                        <div className="button-holder">
                            <img src={down} alt="downimage" width="100%" onClick={this.handleDown}/>
                        </div>
                        <div className="button-holder">
                            <img src={downright} alt="downrightimage" width="100%" onClick={this.handleDownRight}/>
                        </div>
                    </div>
                
                    <div className="button-wrapper">
                        <div className="button-holder">
                            <img src={punch} alt="punchimage" width="100%" onClick={this.handlePunch}/>
                        </div>
                        <div className="button-holder">
                            <img src={slash} alt="slashimage" width="100%" onClick={this.handleSlash}/>
                        </div>
                        <div className="button-holder">
                            <img src={hslash} alt="hslashimage" width="100%" onClick={this.handleHeavy}/>
                        </div>
                         <div className="button-holder">
                            <img src={yamada} alt="yamadaimage" width="100%" onClick={this.handleYamada}/>
                        </div>
                        <div className="button-holder">
                            <img src={kick} alt="kickimage" width="100%" onClick={this.handleKick}/>
                        </div>
                        <div className="button-holder">
                            <img src={dust} alt="dustimage" width="100%" onClick={this.handleDust}/>
                        </div>
                        <div className="button-holder"/>
                        <div className="button-holder">
                            <img src={gosha} alt="goshaimage" width="100%" onClick={this.handleGosha}/>
                        </div>
                    </div>    
                </div>
            </div>
        );
    }
}

function ActionButtons() {

    return (
        <div>
            <Express/>
        </div>
    )
}

export default ActionButtons;