async function showdata() {
  var queryURL = "https://rekrutacja.webdeveloper.rtbhouse.net/files/banner.json";
  const responseData = await fetch(queryURL)
  const jsonData = await responseData.json()
  const shuffled = jsonData.offers.sort(() => 0.5 - Math.random());
  let selectedRandomProducts = shuffled.slice(0, 3);

  displayProducts(selectedRandomProducts)
  
}

function displayProducts(result) {

  result.forEach(product => {
    const content = `
      <div class="cardProduct mySlides">
        <div class="imageProduct">
          <img src="${product.imgURL}"/>
        </div>
        <div class="contentProduct">
          <span class="nameProduct">${product.name}</span>
          <div class="contentPrice"> 
            <span>${product.price}</span>
            <span>${product.currency}</span>
          </div>
        </div>
        <div class="contentButton">
          <a class="buttonProduct">Check</a>
        </div>
      </div>
    `
    document.getElementById('app').insertAdjacentHTML('beforeend', content)
  })
  
  sliderAnimation()
}

showdata() 


let productIndex = 0;
function sliderAnimation() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  productIndex++;
  if (productIndex > slides.length) {productIndex = 1}    
  for (i = 0; i < slides.length; i++) {
      slides[i].className = slides[i].className.replace(" active", "");
  }
  slides[productIndex-1].style.display = "block";

  slides[productIndex-1].className += " active";

  setTimeout(sliderAnimation, 4000); 
}


const closeBtn = document.querySelector(".close-btn");
const container = document.querySelector(".container");
const logoCompany = document.querySelector(".logoCompany");

closeBtn.addEventListener("click", () => {
  container.style.display = "none";
  logoCompany.style.display = "none";
});