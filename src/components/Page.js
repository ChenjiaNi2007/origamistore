import React from 'react'
import PageCSS from '../cssModules/Page.module.css';
import Popup from '../components/Popup';

const Page = (props) => {
  return (
    <div className={PageCSS.page}>
        <p>{props.name}</p>
        <a onClick={() => props.openPopup(true)}><img height={400} width={400} className={PageCSS.image} src={props.image}></img></a>
        <Popup trigger={props.visible} setTrigger={props.openPopup} image={props.image} name={props.name}/>
    </div>
  )
}

export default Page