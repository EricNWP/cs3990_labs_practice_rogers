"use strict";

let LogIn=()=>{
  let userType=prompt("Who are you?","Student");
  let content=(userType.toLowerCase()=="admin")?
  "<button onclick='sayHiButton()'>Say Hi</button><button onclick='animalButton()'>Favorite animal</button>":
  (userType.toLowerCase()=="student")?
  "<button onclick='sayHiButton()'>Say Hi!</button>":
  "I don't know you";


  document.write(content);
}


let sayHiButton=()=>{
  let language=(prompt("What is the abbreviation of the language you speak?"));
  let langAnswer=(language.toLowerCase());
  let message = ""
  switch (langAnswer) {
    case "eng":
      message = "Hello";
      break;
    
    case "fr":
      message = "Bounjour";
      break;
    
    case "de":
      message = "Hallo";
      break;

    case "spa":
      message = "Hola";
      break;

    default:
      message = "I do not speak your language.";
  }

  alert(message)
}

let animalButton=()=>{
  let birthYear=(prompt("What is your year of birth"));
  let age = 2025 - Number(birthYear);
  if (age > 18){
    let image = document.createElement("img");
    image.src = "https://cdn.discordapp.com/attachments/257338052576411649/1352703730155389028/2124124.jpg?ex=67defb05&is=67dda985&hm=ef226b213d7355b1ae3f44fc5dbb8260968767f0a8735f0d92aa7226a13110a5&";
    document.body.appendChild(image);
  }

  switch (true) {
    case (age < 18):
      alert("Content is not available due to age restrictions.");
      break;
    
    case ((age > 18) && (age < 55)):
      let animal=(prompt("What is your favorite animal?"));
      let chosenAnimal=(animal.toLowerCase());
      let animalImage = document.createElement("img");
      switch(chosenAnimal) {

        case "cat":
          animalImage.src = "https://cdn.discordapp.com/attachments/257338052576411649/1352709300560199751/GNySxYtbgAAl7po.jpg?ex=67df0035&is=67ddaeb5&hm=a4e341e4be7ac0f00f9495eac5676385f0c447f575bcc7a67ef0f501f73166ae&";
          document.body.appendChild(animalImage);
          break;
        
        case "dog":
          animalImage.src = "https://cdn.discordapp.com/attachments/257338052576411649/1352709342343856198/GPNoSsdWMAAj4G7.jpg?ex=67df003f&is=67ddaebf&hm=e7b75f0afea6b2003421c5c8681a67dd60293d42030c0409ad1b374980be65dd&";
          document.body.appendChild(animalImage);
          break;

        case "frog":
          animalImage.src = "https://transforms.stlzoo.org/production/animals/lake-titicaca-frog-hero.jpg?w=800&h=950&auto=compress%2Cformat&fit=crop&dm=1638833408&s=c7ec2f4a3bac2acdfcbdb44090790dfc";
          document.body.appendChild(animalImage);
          break;

        case "mouse":
          animalImage.src = "https://cdn.discordapp.com/attachments/257338052576411649/1352710801789550705/thuday.png?ex=67df019b&is=67ddb01b&hm=50d58e05d22a73649fbebaa928b97732c832130f3e5b93fb3dc3e79cf2965787&";
          document.body.appendChild(animalImage);
          break;
      }
    
    case (age > 55):
      document.write("Much like mathematics, programming is a logico-deductive system. And I think the important point that I am making is that in a purely logico-deductive system there is no philosophy - everything is known. However, insofar as there is art in mathematics, there is philosophy in mathematics. Insofar as there is art in programming, there is philosophy in programming.")
  }
}

