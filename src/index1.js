
class News {
  constructor(title, image, text) {
    this.title = title;
    this.image = image;
    this.text = text;
    this.likes = 0;
    this.hidden = false;
  }

  addLike(){
    this.likes++;
    this.likesBlock.textContent = "☆".repeat(this.likes);
  }

  hide(){
    this.hidden = true;
    this.imageBlock.style.opacity = "0.5";
    this.titleBlock.style.color = "darkgray";
    this.textBlock.style.color = "darkgray";
    this.titleBlock.style.backgroundColor = "lightgray";
    this.textBlock.style.backgroundColor = "lightgray";
    this.likesButton.disabled = true;

  }
  render(element){
    this.div = document.createElement('div');
    this.titleBlock = document.createElement('h1');
    this.imageBlock = document.createElement('img');
    this.textBlock = document.createElement('p');
    this.likesBlock = document.createElement('p');
    this.likesButton = document.createElement('button');
    this.hideButton = document.createElement('button');


    this.titleBlock.textContent = this.title;
    this.imageBlock.src = this.image;
    this.textBlock.textContent = this.text;
    this.likesBlock.textContent = "";
    this.likesBlock.style.color = "red";
    this.likesButton.textContent = "Like";
    this.likesButton.onclick = () => this.addLike();
    this.hideButton.textContent = "Hide";
    this.hideButton.onclick = () => this.hide();


    this.div.append(this.titleBlock);
    this.div.append(this.imageBlock);
    this.div.append(this.textBlock);
    this.div.append(this.likesBlock);
    this.div.append(this.likesButton);
    this.div.append(this.hideButton);
    element.append(this.div);
    
  }

  show(element) {
    this.render(element);
  }
}
function generatenews() {


  let arrRecourses = [
    {
      srcImg: 'Images/1.jpg',
      newsTitle: 'Article #1',
      newsContent: ' Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero\'s De Finibus Bonorum et Malorum for use in a type specimen book. '
    }, 
      
    {
      srcImg: 'Images/1.jpg',
      newsTitle: 'Article #2',
      newsContent: ' The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.'
    },
    {
      srcImg: 'Images/1.jpg',
      newsTitle: 'Article #3',
      newsContent: ' This is the third one'
    }
    ];


    let paragraphs = document.querySelectorAll('#content p');
    paragraphs.forEach((element, index) => {
      let newsArticle = new News(arrRecourses[index].newsTitle, arrRecourses[index].srcImg, arrRecourses[index].newsContent);
      newsArticle.show(element);
    })
}

window.onload = () => {
  generatenews();
}