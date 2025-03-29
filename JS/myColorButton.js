import {Button} from './myButton.js';

export class ColorButton extends Button {
    constructor (btnText, btnBgColor, btnTitle = "Default", fColor = "Black"){
        super(btnText, btnBgColor, btnTitle);
        this.fColor = fColor;
    }
  
    show=()=>{
        document.write(`<button style="background-color:${this.btnBgColor}; margin: 5px; color: ${this.fColor};" title:${this.btnTitle}>${this.btnText}</button>`);
    }
  }
  