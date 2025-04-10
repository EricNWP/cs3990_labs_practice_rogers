class ColorButton {
    constructor(color){
        this.color = color;
    }

    show=()=>{
        let newElem = $(`<div class='colorbutton' data-color='${this.color}'></div>`).css({
            backgroundColor: this.color,
            width: '30px',
            height: '30px',
            display: 'inline-block',
            cursor: 'pointer'
        });
        return newElem;
    }
}


class PaletteMenu {
    constructor(target, box){
        this.colors = ['black', 'grey', 'darkred', 'red', 'yellow', 'green', 'blue', 'purple', 'indigo', 'white', 'lightgrey', 'brown', 'pink', 'beige', 'lightgreen', 'lightblue', 'darkslateblue', 'lightpink'];
        this.$target = $(target);
        this.$box = $(box);
        this.makeColors();
        this.$box.on('mouseover', '.colorbutton', this.onHover.bind(this));
        this.$box.on('click', '.colorbutton', this.onClick.bind(this));
    }

    makeColors=()=>{
        this.colors.forEach(color => {
            let $colorbtn = new ColorButton(color).show();
            this.$box.append($colorbtn);
        })
    }

    onHover=(event)=>{
        let $targetColor = $(event.currentTarget);
        let color = $targetColor.data('color');

        this.$target.css({backgroundColor: color});
        
    }

    onClick=(event)=>{
        let $targetColor = $(event.currentTarget);
        let color = $targetColor.data('color');

        this.$target.css('color', color);
        

    }
}

$(document).ready(function() {
    new PaletteMenu('#box', '#target');

});