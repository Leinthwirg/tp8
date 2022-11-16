window.onload = function() {
  
  cardList = document.getElementsByClassName("card"); //collection of cards
  
  cardCount = cardList.length; //how many cards are on the table
  
  for (c = 0; c < cardCount; c++) {
       cardList[c].onclick = function() {
    this.classList.toggle("clicked");
  }
 }

}