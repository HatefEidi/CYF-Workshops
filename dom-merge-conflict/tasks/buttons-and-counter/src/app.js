//increments the number in a node's text
function increment(node) {
  let current = node.textContent;
  node.textContent = Number(current) + 1;
}

function decrement(node) {
  let current = node.textContent;
  node.textContent = Number(current) - 1;
}

export function App() {
  const body = document.createElement("body");

  const header = document.createElement("header");
  header.innerHTML = `
        <h1>Number Counter</h1>
        <p>A simple counter. Press increment to increase the count by one and press decrement to decrease the count by one, decrement</p>
    `;
  body.appendChild(header);

  const main = document.createElement("main");
  main.innerHTML = `
        <p id="counter" data-testid="counter">0</p>
        <button id="increment">Increment</button>
        <button id="decrement">Decrement</button>
    `;
  body.appendChild(main);

  const incrementButton = body.querySelector("#increment");
  const decrementButton = body.querySelector("#decrement");
  const counter = body.querySelector("#counter");
  incrementButton.addEventListener("click", () => {
    increment(counter);
  });

  decrementButton.addEventListener("click", () => {
    decrement(counter);
  });

  return body;
}
