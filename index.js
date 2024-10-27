const shape = ["하트", "다이아", "스페이드", "클로버"];
const number = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

const cardDeck = () => {
  let deck = [];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 13; j++) {
      deck.push({ number: number[j], shape: shape[i] });
    }
  }
  return deck;
};
console.log(cardDeck());
let deck = cardDeck();
