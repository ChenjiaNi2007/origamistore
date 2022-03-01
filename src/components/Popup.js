import PopupCSS from "../cssModules/Popup.module.css";
import React from 'react'

const Popup = (props) => {
  return (props.trigger) ? (
    <div className={PopupCSS.popup}>
        <div className={PopupCSS.popupInner}>
            <a className={PopupCSS.closeBtn} onClick={() => props.setTrigger(false)}>Close</a>
            <p>{props.name}</p>
            <div className={PopupCSS.content}>
                <img alt="props.name" src={props.image} width={300} height={300} />
                  <form className={PopupCSS.formStyle} onSubmit={() => alert("Thanks for ordering")}>
                    <input type="number" placeholder="1"></input>
                    <div className={PopupCSS.radio}>
                      <input type="radio" name="size" value="Normal" id="firstrbtn"></input>
                      <label for="firstrbtn">Normal</label>
                      <input type="radio" name="size" value="Large" id="secondrbtn"></input>
                      <label for="secondrbtn">Large</label>
                    </div>
                    <input type="text" placeholder="color e.g. blue, red"></input>
                    <input type="submit" value="Place Order"></input>
                </form>
            </div>
        </div>
    </div>
  ) : "";
}

export default Popup