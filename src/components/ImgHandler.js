import React from 'react'
import Maybox from './Maybox'
import './ImgHandler.css'

//May Images
import twod from '../images/mayimages/2D.png'
import twodhit from '../images/mayimages/2Dhit.png'
import twoh from '../images/mayimages/2H.png'
import twohhit from '../images/mayimages/2Hhit.png'
import twok from '../images/mayimages/2K.png'
import twokhit from '../images/mayimages/2Khit.png'
import twop from '../images/mayimages/2P.png'
import twophit from '../images/mayimages/2Phit.png'
import twos from '../images/mayimages/2S.png'
import twoshit from '../images/mayimages/2Shit.png'
import threek from '../images/mayimages/3K.png'
import threekhit from '../images/mayimages/3Khit.png'
import fivedhit from '../images/mayimages/5Dhit.png'
import fived from '../images/mayimages/5D.png'
import fiveh from '../images/mayimages/5H.png'
import fivehhit from '../images/mayimages/5Hhit.png'
import fivek from '../images/mayimages/5K.png'
import fivekhit from '../images/mayimages/5Khit.png'
import fivep from '../images/mayimages/5P.png'
import fivephit from '../images/mayimages/5Phit.png'
import sixh from '../images/mayimages/6H.png'
import sixhhit from '../images/mayimages/6Hhit.png'
import sixk from '../images/mayimages/6K.png'
import sixkhit from '../images/mayimages/6Khit.png'
import sixp from '../images/mayimages/6P.png'
import sixphit from '../images/mayimages/6Phit.png'
import cs from '../images/mayimages/CS.png'
import cshit from '../images/mayimages/CShit.png'
import fs from '../images/mayimages/FS.png'
import fshit from '../images/mayimages/FShit.png'
import jtwoh from '../images/mayimages/J2H.png'
import jtwohhit from '../images/mayimages/J2Hhit.png'
import jd from '../images/mayimages/JD.png'
import jdhit from '../images/mayimages/JDhit.png'
import jh from '../images/mayimages/JH.png'
import jhhit from '../images/mayimages/JHhit.png'
import jk from '../images/mayimages/JK.png'
import jkhit from '../images/mayimages/JKhit.png'
import jp from '../images/mayimages/JP.png'
import jphit from '../images/mayimages/JPhit.png'
import js from '../images/mayimages/JS.png'
import jshit from '../images/mayimages/JShit.png'
import mayportrait from '../images/mayimages/mayportrait.png'
import nodata from '../images/nodata.png'
import overhead from '../images/mayimages/overheadkiss.png'
import sparkle from '../images/mayimages/sparkle.png'
import sparklehit from '../images/mayimages/sparklehit.png'
import yamadasan from '../images/mayimages/yamadasan.png'
import goshawonderful from '../images/mayimages/goshawonderful.png'
import yamadasanhit from '../images/mayimages/yamadasanhit.png'
import goshawonderfulhit from '../images/mayimages/goshawonderfulhit.png'
import horidolph from '../images/mayimages/horidolph.png'
import vertdolph from '../images/mayimages/vertdolph.png'
import horidolphhit from '../images/mayimages/horidolphhit.png'
import vertdolphhit from '../images/mayimages/vertdolphhit.png'

//dir images
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
import yamada from '../images/yamada.png'
import gosha from '../images/gosha.png'
import dolphinup from '../images/dolphinup.png'
import dolphinright from '../images/dolphinright.png'

//0
const punchArray = [
    [twop, twophit, '24', '5', '4', '8', '-2', 'N/A'],
    [sixp, sixphit, '35', '12', '6', '19', '-7', 'N/A'],
    [jp, jphit, '22', '5', '3', '0', '0', 'N/A'],
    [fivep, fivephit, '28', '5', '3', '8', '-1', 'N/A'],
    [twop, twophit, '24', '5', '4', '8', '-2', 'N/A'],
    [jp, jphit, '22', '5', '3', '0', '0', 'N/A'],
    [nodata, nodata, 'N/A','N/A','N/A','N/A','N/A','N/A'],
    [nodata, nodata, 'N/A','N/A','N/A','N/A','N/A','N/A'],
    [nodata, nodata, 'N/A','N/A','N/A','N/A','N/A','N/A'],
    [nodata, nodata, 'N/A','N/A','N/A','N/A','N/A','N/A'],
]
//1
const slashArray = [
    [twos, twoshit, '35', '10', '6', '15', '-7', 'N/A'],
    [fs,  fshit, '38', '12', '3', '19', '-8', 'N/A'],
    [js,  jshit, '34', '12', '4', '0', '0', 'N/A'],
    [cs,  cshit, '44', '7', '6', '8', '+3', 'N/A'],
    [cs,  cshit, '44', '7', '6', '8', '+3', 'N/A'],
    [js,  jshit, '34', '12', '4', '0', '0', 'N/A'],
    [nodata, nodata, 'N/A','N/A','N/A','N/A','N/A','N/A'],
    [nodata, nodata, 'N/A','N/A','N/A','N/A','N/A','N/A'],
    [horidolph, horidolphhit, '35','7','15','11','-5','N/A'],
        [vertdolph, vertdolphhit, '40','6','19','7','-3','N/A']
]
//2
const kickArray = [
    [twok,  twokhit, '28', '6', '4', '10', '-2', 'N/A'],
    [sixk,  sixkhit, '35', '20', '5', '11', '-2', 'N/A'],
    [jk,  jkhit, '28', '7', '3', '0', '0', 'N/A'],
    [fivek,  fivekhit, '30', '9', '6', '11', '-5', 'N/A'],
    [threek, threekhit, '35', '11', '6', '21', '-13', 'N/A'],
    [jk,  jkhit, '28', '7', '3', '0', '0', 'N/A'],
    [sparkle, sparklehit, '50','48','S: 6, H: 10','45','+29','N/A'],  
    [overhead, overhead, '40-50','6','42','N/A','N/A','F: 1-6'],
    [nodata, nodata, 'N/A','N/A','N/A','N/A','N/A','N/A'],
    [nodata, nodata, 'N/A','N/A','N/A','N/A','N/A','N/A'],
]
//3
const hSlashArray = [
    [twoh, twohhit, '60', '11', '13', '26', '-20', 'N/A'],
    [sixh, sixhhit, '70 [90]', '16[40]', '6', '24', '-8[+8]', 'N/A'],
    [jh, jhhit, '50', '12', '10', '0', '0', 'N/A'],
    [fiveh,  fivehhit, '65', '13', '4', '30', '-15', 'N/A'],
    [twoh, twohhit, '60', '11', '13', '26', '-20', 'N/A'],
    [jtwoh, jtwohhit, '40', '13', '0','0','0','N/A'],
    [nodata, nodata, 'N/A','N/A','N/A','N/A','N/A','N/A'],
    [nodata, nodata, 'N/A','N/A','N/A','N/A','N/A','N/A'],
    [horidolph, horidolphhit, '45','25','15','11','+5','N/A'],
    [vertdolph, vertdolphhit, '45','11','27','8','+1','N/A']
]
//4
const dustArray = [
    [twod,  twodhit, '30', '10', '7', '17', '-7', 'N/A'],
    [fived, fivedhit, '50[62]', '20[28]', '3', '26', '-15[10]', 'N/A'],
    [jd, jdhit, '60', '10', '6', '0', '0', 'N/A'],
    [fived, fivedhit, '50[62]', '20[28]', '3', '26', '-15[10]', 'N/A'],
    [twod,  twodhit, '30', '10', '7', '17', '-7', 'N/A'],
    [jd, jdhit, '60', '10', '6', '0', '0', 'N/A'],
    [nodata, nodata, 'N/A','N/A','N/A','N/A','N/A','N/A'],
    [nodata, nodata, 'N/A','N/A','N/A','N/A','N/A','N/A'],
    [nodata, nodata, 'N/A','N/A','N/A','N/A','N/A','N/A'],
    [nodata, nodata, 'N/A','N/A','N/A','N/A','N/A','N/A'],
]

const yamadaArray = [
    [yamadasan, yamadasanhit, '190','10+','0','88','-54','N/A'],
        [yamadasan, yamadasanhit, '190','10+','0','88','-54','N/A'],
            [yamadasan, yamadasanhit, '190','10+','0','88','-54','N/A'],
                [yamadasan, yamadasanhit, '190','10+','0','88','-54','N/A'],
                    [yamadasan, yamadasanhit, '190','10+','0','88','-54','N/A'],
                        [yamadasan, yamadasanhit, '190','10+','0','88','-54','N/A'],
                            [yamadasan, yamadasanhit, '190','10+','0','88','-54','N/A'],
                                [nodata, nodata, 'N/A','N/A','N/A','N/A','N/A','N/A'],
                                    [nodata, nodata, 'N/A','N/A','N/A','N/A','N/A','N/A'],
                                     [nodata, nodata, 'N/A','N/A','N/A','N/A','N/A','N/A']
]

const goshaArray = [
    [goshawonderful, goshawonderfulhit, '80-100','6+4','0','0','-21','F: 1'],
        [goshawonderful, goshawonderfulhit, '80-100','6+4','0','0','-21','F: 1'],
            [goshawonderful, goshawonderfulhit, '80-100','6+4','0','0','-21','F: 1'],
                [goshawonderful, goshawonderfulhit, '80-100','6+4','0','0','-21','F: 1'],
                    [goshawonderful, goshawonderfulhit, '80-100','6+4','0','0','-21','F: 1'],
                        [goshawonderful, goshawonderfulhit, '80-100','6+4','0','0','-21','F: 1'],
                            [goshawonderful, goshawonderfulhit, '80-100','6+4','0','0','-21','F: 1'],
                                [nodata, nodata, 'N/A','N/A','N/A','N/A','N/A','N/A'],
                                    [nodata, nodata, 'N/A','N/A','N/A','N/A','N/A','N/A'],
                                        [nodata, nodata, 'N/A','N/A','N/A','N/A','N/A','N/A']
]
const allArray = [
    punchArray,
    slashArray,
    kickArray,
    hSlashArray,
    dustArray,
    yamadaArray,
    goshaArray
]

const dirArray = [
    down,
    right,
    up,
    neutral,
    downright,
    updown,
    circleback,
    shoryuken,
    dolphinright,
    dolphinup
]

const buttArray = [
    punch,
    slash,
    kick,
    hslash,
    dust,
    yamada,
    gosha
]

function ImgHandler(props) {
    return (
        <div className="img-container">
                <div className="img-big-wrap">
                    <div className="img-wrap">
                        <img src={allArray[props.src][props.move][0 + props.hit]} alt="idk" width="100%" height="auto" alignSelf="center"/>
                    </div>
                </div>
            <div className="display-box">
                <img src={dirArray[props.move]} alt="idk" width="60px"/>
                <img src={buttArray[props.src]} alt="idk" width="60px"/>
            </div>

            <div className="desc-big-box">
                <div className="desc-box">
                    <div className="desc-name">
                        Damage:
                    </div>

                    <div className="desc-value">
                        {allArray[props.src][props.move][2]}
                    </div>
                </div>

                <div className="desc-box">
                    <div className="desc-name">
                        Startup:
                    </div>
                    <div className="desc-value">
                        {allArray[props.src][props.move][3]}
                    </div>
                </div>

                <div className="desc-box">
                    <div className="desc-name">
                        Active:
                    </div>
                    <div className="desc-value">
                        {allArray[props.src][props.move][4]}
                    </div>
                </div>

                <div className="desc-box">
                    <div className="desc-name">
                    Recovery:
                    </div>
                    <div className="desc-value">
                        {allArray[props.src][props.move][5]}
                    </div>
                </div>

                <div className="desc-box">
                    <div className="desc-name">
                        On-Block:
                    </div>
                    <div className="desc-value">
                        {allArray[props.src][props.move][6]}
                    </div>
                </div>
                <div className="desc-box">
                    <div className="desc-name">
                        Invuln:
                    </div>
                    <div className="desc-value">
                        {allArray[props.src][props.move][7]}
                    </div>
                </div>
            </div>
            </div>
    )
}

export default ImgHandler
