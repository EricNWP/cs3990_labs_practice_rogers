let hannaMenu = [
    {
        name: "Home",
        iconSrc: "&#127968",
    },

    {
        name: "Favorities",
        iconSrc: "&#128151",
    },
    {
        name: "Achievements",
        iconSrc: "&#127942",
    },
];

let hannaData = [
    {
        item: "home",
        img: "https://images.pexels.com/photos/756790/pexels-photo-756790.jpeg",
        content:
        "Grande Prairie is locate in Northwestern Alberta...",

    },
    {
        item: "favorities",
        img: "http://media.istockphoto.com/id/1178852373/photo/canadian-flag-flying-over-old-quebec-city.jpg?s=612x612&w=0&k=20&c=0dsOXraklB5DCLYeYVpmDxfgquLlVSalCcHacs0LgTY=",
        content:
        "Grande Prairie is locate in Northwestern Alberta...",
        
    },
    {
        item: "achievements",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMFU8f4HthOQUqhG0zYtheITSIz1TCSEYCzw&s",
        content:
        "Grande Prairie is locate in Northwestern Alberta...",
        
    },
]

class Item {
    constructor(name, image, content) {
        this.name = name;
        this.content = content;
        this.image = image;

        this.render();

    }

    render=()=>{
        var block = document.createElement("div");
        var header = document.createElement("h1");
        var image = document.createElement("img");
        var para = document.createElement("p");

        header.id="header";
        header.innerHTML = this.name;

        image.id="image";
        header.innerHTML = this.image;

        para.id = "para";
        para.innerHTML = this.content;

        block.append(header);
        block.append(image);
        block.append(para);

        $(document).find("#main").append(block);

    }
}

class MenuItem {
    constructor(name, iconSrc) {
        this.name = name;
        this.iconSrc = iconSrc;

        this.createElement();
    }

    createElement=()=>{
        var item = document.createElement("li");
        item.id="listItem";
        item.innerHTML = this.iconSrc;
        item.style.display = "inline-block";
        item.style.nameText = this.name;

        var textitem = document.createElement("p");;
        textitem.id = "textitem";
        textitem.innerHTML= this.name;
        textitem.classList.add("hideclass");


        item.append(textitem);
        
        $(document).find("ul").append(item);

    }


}


genInstances=()=>{

    $('#menu').find("h3").hover(function () {
        $('#menu').find("h3").text("Menu >>");
    },
    function () {
        $('#menu').find("h3").text("Menu");
    });

    $('#menu').find("h3").click(function () {
        
        $('#menu').find("p").toggleClass("hideclass");
    });



    hannaMenu.forEach((a) => {new MenuItem(a.name, a.iconSrc)})
    $('#menu').children().first().css("border", "solid");
    $('#listItem').click(function() {
        new Item(hannaData.find((x)=> {
            console.log(x.item)
            console.log($(this).nameText);
            return x.item == $(this.nameText);
        }))
    });

}

$(document).ready(function() {
    genInstances();
});
