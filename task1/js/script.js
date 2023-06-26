async function showdata() {
  const queryURL =
    "https://rekrutacja.webdeveloper.rtbhouse.net/files/banner.json";

  const responseData = await fetch(queryURL);
  const jsonData = await responseData.json();
  const shuffled = jsonData.offers.sort(() => 0.5 - Math.random());
  let selectedRandomProducts = shuffled.slice(0, 4);
  displayProducts(selectedRandomProducts)
}

function displayProducts(result) {
  result.forEach(({ imgURL, price, currency, name }) => {
    const content = `
      <div class="cardProduct">
        <div class="imageProduct">
          <img src="${imgURL}" alt="${name}"/>
        </div>
        <div class="priceProduct">
          <span>${price}</span>
          <span>${currency}</span>
        </div>
      </div>
    `;
    document.getElementById("app").insertAdjacentHTML("beforeend", content);
  });

  borderAnimation();
}

showdata();

async function borderAnimation() {
  const productsTarget = document.getElementById("app");

  const firstAnimation = anime({
    targets: ".cardProduct",
    easing: "linear",
    keyframes: [{ borderColor: "#f00" }, { borderColor: "#ccc" }],
    delay: function (_, i, _) {
      return i * 2000;
    },
    loop: true,
  });

  productsTarget.addEventListener("mouseenter", function () {
    firstAnimation.pause();
  });

  productsTarget.addEventListener("mouseleave", function () {
    firstAnimation.play();
  });
}