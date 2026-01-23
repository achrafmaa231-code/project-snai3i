document.addEventListener("DOMContentLoaded", function () {

  const products = document.getElementById("products");

  const div = document.createElement("div");
  div.className = "Game_Boy_Color";

  div.innerHTML = `
    <img src="Images/gameboy.png" alt="Game Boy">
    <div class="Game_Boy_Color-text">
      <p>name: Game Boy Color</p>
      <p>price: 55.9 $</p>
    </div>
  `;

  products.appendChild(div);

});