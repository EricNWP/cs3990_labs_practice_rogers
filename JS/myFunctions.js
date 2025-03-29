import {arrTexts, arrColors} from './myArrays.js';
import {Button} from './myButton.js';
import {ColorButton} from './myColorButton.js';

export let makeButtons=()=>{
    arrTexts.forEach((element, index) => {
      setTimeout(()=>{
      let button = new Button(element, arrColors[index]);
      button.show();
      }, 3000 * index);
    })
  }
  
export let makeColorButton=()=>{
    let button = new ColorButton("Color button", "Yellow", "Color button", "Green");
    setTimeout(()=>{
    button.show();
    }, 12000);
}