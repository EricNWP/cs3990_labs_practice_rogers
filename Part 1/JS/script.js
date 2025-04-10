class NumberGenerator {
    constructor () {
        this.styleClass = "myRed"
    }

    genNumber=()=>{
        return Math.floor(Math.random() * 10) + 1;
    }

    show=()=>{
        let content = document.createElement("div");
        content.id = "newsBar";
        content.classList.add(this.styleClass);
        document.getElementById("myMain").append(content);

        let newsBlock = document.createElement("p")
        newsBlock.id = "rndInt";
        newsBlock.innerHTML = this.genNumber();

        let buttonGen = document.createElement("button");
        buttonGen.id = "intGen";
        buttonGen.innerHTML = "Make your number now!";
        buttonGen.onclick=()=>{
            document.getElementById("rndInt").innerHTML = this.genNumber();
            newsGen(document.getElementById("bigNewsBar"), parseInt(document.getElementById("rndInt").innerHTML));
        };
        
        let moreButton = document.createElement("button");
        moreButton.id = "moreButton";
        moreButton.innerHTML = '⬆️'
        moreButton.onclick=()=>{
            document.getElementById("rndInt").innerHTML = parseInt(document.getElementById("rndInt").innerHTML) + 1;
            newsGen(document.getElementById("bigNewsBar"), parseInt(document.getElementById("rndInt").innerHTML));
        };

        let lessButton = document.createElement("button");
        lessButton.id = "lessButton";
        lessButton.innerHTML = '⬇️'
        lessButton.onclick=()=>{
            document.getElementById("rndInt").innerHTML = parseInt(document.getElementById("rndInt").innerHTML) - 1;
            newsGen(document.getElementById("bigNewsBar"), parseInt(document.getElementById("rndInt").innerHTML));
        };

        let bigNewsBar = document.createElement("div");
        bigNewsBar.id = "bigNewsBar";
        let arrowsContainer = document.createElement("div");
        arrowsContainer.style.display = "flex";
        arrowsContainer.style.alignItems = "center";
        arrowsContainer.style.gap = "10px";

        arrowsContainer.append(moreButton);
        arrowsContainer.append(newsBlock);
        arrowsContainer.append(lessButton);
        document.getElementById("newsBar").append(arrowsContainer);
        document.getElementById("newsBar").append(buttonGen);
        document.getElementById("newsBar").append(bigNewsBar);
        newsGen(document.getElementById("bigNewsBar"), parseInt(document.getElementById("rndInt").innerHTML));

    }


}

let newsGen = (elem, divs) => {
    elem.innerHTML = "";
    for (let i = 0; i < divs; i++){
        let div = document.createElement("div");
        div.id = "div" + i;
        let title = document.createElement("h1");
        title.innerHTML = "Title #" + i;
        div.append(title);
        let para = document.createElement("p");
        para.innerHTML = "Lorem Ipsum originated as early as 45 BC when Roman scholar Marcus Tullius Cicero wrote De Finibus Bonorum et Malorum (On the Boundaries of Good and Evil). This treatise discusses various philosophical topics including ethics and politics.";
        div.append(para);
        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete 🗑️";
        div.append(deleteButton);

        deleteButton.onclick=(event)=>{
            event.stopPropagation();
            event.currentTarget.parentElement.remove();
            
        }
        elem.append(div);
    }
}

let run=()=>{
    let content = new NumberGenerator();
    content.show();
}

run();