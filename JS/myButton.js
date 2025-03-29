export class Button {
    constructor (btnText, btnBgColor, btnTitle = "Default"){
      this.btnText = btnText;
      this.btnBgColor = btnBgColor;
      this.btnTitle = btnTitle;
    }
  
    
    show=()=>{
        document.write(`<button style="background-color:${this.btnBgColor}; margin: 5px;" title:${this.btnTitle}>${this.btnText}</button>`);
    }
  }
  