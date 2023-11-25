const cards = [
  "You drink",
  "The person after you can ask you any question. You can either answer truthfully or refuse to answer and drink",
  "Pick someone and guess the color of their underwear. If you guess correctly, they drink. Otherwise, you drink",
  "The person with the least IG followers drinks.",
  "Pick a person to drink",
  "Everyone who is taller than you drinks",
  "Everyone votes on who is the most likely to get arrested. That person drinks.",
  "All guys drink",
  "Everyone votes on who is the most likely to dodge drinks. That person drinks.",
  "All girls drink",
  "Pick a word. Everyone takes turns saying a word that rhymes. The person that hesitates or repeats a word drinks",
  "Drink for every sibling you have",
  "Pick someone to play rock, paper, scissors with. Loser drinks",
  "Everyone who is shorter than you drinks",
  "The person who most recently used the bathroom drinks",
  "Flip a coin. If it's heads, you drink. If it's tails, everyone else drinks.",
  "Starting with you, take turns naming a color. Continue until someone hesitates or repeats a color. That person drinks.",
  "Everyone who can't touch their toes without bending their knees drink",
  "Imitate another player. First person to guess correctly picks someone to drink",
  "You have 30 seconds to make the person to your right laugh. If you fail, you drink. If you succeed, that person drinks",
  "You must dance until it is your turn again. If you refuse or stop, you drink",
  "Starting with you, take turns naming a cartoon show. Continue until someone hesitates or repeats a show. That person drinks",
  "Use an empty bottle in the center. When a card is drawn, the drawer spins the bottle, and the person it points to must drink.",
  "Starting with you, take turns naming a foreign celebrity. Continue until someone hesitates or repeats a celebrity. That person drinks",
  "Guess the quote. The person who draws the card must say a line from a movie. The person who correctly guesses the movie picks someone to drink",
  "Reverse Alphabet. The group goes around naming words alphabetically, but backward (from Z to A). The player who hesitates or fails to come up with a word drinks."
];

const drawCardButton = document.getElementById("myButton");

const cardDisplay = document.getElementById('cardDisplay');

drawCardButton.addEventListener('click', function(){
  // to select random card
  const randomIndex = Math.floor(Math.random() * cards.length);
  const drawnCard = cards[randomIndex];

  // display card's action or rule
  cardDisplay.textContent = drawnCard;
})