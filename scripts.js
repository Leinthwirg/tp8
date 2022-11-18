cardsClicked = 0;

function cardClicked(what) {
  if (!what.classList.contains("removed")) {
    //its already clicked, act appropriately
    if (what.classList.remove("clicked")) {
      what.classList.remove("clicked");
      cardsClicked--;

    } else {
      // its not already clicked
      what.classList.add("clicked");
      cardsClicked++;

      if (cardsClicked == 2) {
        //comapre card values
        cardCompare();
      }
    }
  }
}


function cardCompare() {

  clickedCards = document.querySelectorAll(".clicked");

  // first clicked element is clickedCards[0]
  // second clicked element is clickedCards[1]

  matched = false
  if (clickedCards[0].classList.contains("flamingo") &&
    clickedCards[1].classList.contains("flamingo")) {
    matched = true; //they matched pic 1

  } else if (clickedCards[0].classList.contains("frog") &&
    clickedCards[1].classList.contains("frog")) {
    matched = true;
  } else if (clickedCards[0].classList.contains("giraffe") &&
    clickedCards[1].classList.contains("giraffe")) {
    matched = true;
  } else if (clickedCards[0].classList.contains("lion") &&
    clickedCards[1].classList.contains("lion")) {
    matched = true;
  } else if (clickedCards[0].classList.contains("panda") &&
    clickedCards[1].classList.contains("panda")) {
    matched = true;
  } else if (clickedCards[0].classList.contains("shark") &&
    clickedCards[1].classList.contains("shark")) {
    matched = true;
  } else if (clickedCards[0].classList.contains("wolf") &&
    clickedCards[1].classList.contains("wolf")) {
    matched = true;
  } else if (clickedCards[0].classList.contains("zebra") &&
    clickedCards[1].classList.contains("zebra")) {
    matched = true;
  }


  if (matched) {
    //hide cards
    removeCards(clickedCards[0], clickedCards[1])

  } else {
    //unflip cards
    unflipCards(clickedCards[0], clickedCards[1]);
  }
}


function removeCards(cardA, cardB) {

  pause = setTimeout(function() {
    cardA.classList.remove("clicked")
    cardB.classList.remove("clicked")

    cardA.classList.add("removed");
    cardB.classList.add("removed");

    cardsClicked = 0;

    checkWinning();
  }, 1000);
}

function unflipCards(cardA, cardB) {
  pause = setTimeout(function() {
    cardA.classList.remove("clicked");
    cardB.classList.remove("clicked");

    cardsClicked = 0;
  }, 750);
}

function checkWinning() {
  remainingCards = document.querySelectorAll(".card"); //get all cards

  for (c = 0; c < remainingCards.length; c++) {
    if (!remainingCards[c].classList.contains("removed")) {
      return;
    }
  }
  document.getElementById("mainTable").innerHTML = "You won!"
}

function shuffleCards() {
  table = document.querySelector("#mainTable");
  cardCount = table.children.length;
  cardToMove = table.children[0];
  table.appendChild(cardToMove);

  for (c = 0; c < cardCount; c++) {
    randomCard = Math.floor(Math.random() * cardCount);
    cardToMove = table.children[randomCard];
    table.appendChild(cardToMove);
  }
}

window.onload = function() {

          shuffleCards();

          cardList = document.querySelectorAll(".card"); //collection of cards

          cardCount = cardList.length; //how many cards are on the table

          for (c = 0; c < cardCount; c++) {
            cardList[c].onclick = function() {
              cardClicked(this);
            }
          }
        }