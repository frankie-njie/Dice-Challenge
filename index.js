var imageDir = 'images/';
var imageArray = ['dice1.png', 'dice2.png', 'dice3.png', 'dice4.png', 'dice5.png', 'dice6.png'];

// Player1
var radomnumber1 = Math.floor(Math.random() * 5);

var randomImage = document.querySelector(".img1");
var imagePath = imageDir + imageArray[radomnumber1];

var setImage = randomImage.setAttribute('src', imagePath);

// Player2
var randomImage2 = document.querySelector(".img2");
var randomnumber2 = Math.floor(Math.random() * 5);
var imagePath2 = imageDir + imageArray[randomnumber2];

var setImage2 = randomImage2.setAttribute('src', imagePath2)

//Winner
var displayWinner = document.querySelector('h1');

if (radomnumber1 > randomnumber2) {
  displayWinner.innerHTML = "Player 1 Wins!!";
} else if (radomnumber1 == randomnumber2) {
  displayWinner.innerHTML = "It's a tie";
} else {
  displayWinner.innerHTML = "Player 2 wins!!";
}
