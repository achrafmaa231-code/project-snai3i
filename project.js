const products = document.getElementById("products");

const device = {
  name: "Game Boy Color",
  price: "55.9 $",
  image: "Images/gameboy.png"
};

const div = document.createElement("div");
div.className = "Game_Boy_Color";

div.innerHTML = `
  <img src="${device.image}">
  <div class="Game_Boy_Color-text">
    <p>name: ${device.name}</p>
    <p>price: ${device.price}</p>
  </div>
`;

products.appendChild(div);
