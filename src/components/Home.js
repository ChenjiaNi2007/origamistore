import React from 'react'
import Popup from '../components/Popup';
import HomeCSS from '../cssModules/Home.module.css';
import Page from '../components/Page.js';
import { useState } from 'react';
import cdragimg from '../images/bigdragon.jpg';
import craneimg from '../images/crane.jpg';
import eninjastarimg from '../images/expandingninjastar.jpg';
import fcraneimg  from '../images/flappingcrane.jpg';
import roseimg from '../images/rose.jpg';
import sdragonimg from '../images/smalldragon.jpg';


const Home = () => {
  
  const [cdragon, setcdragon] = useState(false);
  const [crane, setcrane] = useState(false);
  const [eninjastar, seteninjastar] = useState(false);
  const [fcrane, setfcrane] = useState(false);
  const [rose, setrose] = useState(false);
  const [dragon, setdragon] = useState(false);
  
  return (
    <>
        <div className={HomeCSS.flexContainer}>
            <Page openPopup={setcdragon} name="Complex Dragon" image={cdragimg} visible={cdragon}/>
            <Page openPopup={setcrane} name="Crane" image={craneimg} visible={crane}/>
            <Page openPopup={seteninjastar} name="Expanding Ninja Star" image={eninjastarimg} visible={eninjastar}/>
            <Page openPopup={setfcrane} name="Flapping Crane" image={fcraneimg} visible={fcrane}/>
            <Page openPopup={setrose} name="Rose" image={roseimg} visible={rose}/>
            <Page openPopup={setdragon} name="Simple Dragon" image={sdragonimg} visible={dragon}/>
        </div>
    </>
  )
}

export default Home