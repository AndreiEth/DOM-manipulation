const btn = document.querySelector("#new-qoute");
const quote = document.querySelector(".quote");
const person = document.querySelector(".person");

const quotes = [
  {
    quote:
      "In the end, it’s not the years in your life that count. It’s the life in your years",
    person: "Abraham Lincoln",
  },
  {
    quote:
      "Don’t gain the world and lose your soul, wisdom is better than silver or gold",
    person: "Bob Marley",
  },
  {
    quote:
      "Lighten up, just enjoy life, smile more, laugh more, and don’t get so worked up about things",
    person: "Kenneth Branagh",
  },
  {
    quote: "Don’t cry because it’s over, smile because it happened",
    person: "Ludwig Jacobowski",
  },
  {
    quote:
      "Do stuff. Be clenched, curious. Not waiting for inspiration’s shove or society’s kiss on your forehead. Pay attention. It’s all about paying attention. Attention is vitality. It connects you with others. It makes you eager. Stay eager",
    person: "Susan Sontag",
  },
];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
