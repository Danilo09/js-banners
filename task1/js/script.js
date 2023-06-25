async function showdata() {
  var queryURL = "https://rekrutacja.webdeveloper.rtbhouse.net/files/banner.json";
  
  const responseData = await fetch(queryURL)
  const jsonData = await responseData.json()
  const sliceData = jsonData.offers.slice(0,4)
  displayProducts(sliceData)
  borderAnimation()
}

function displayProducts(result) {
  // console.log(result)

  result.forEach(product => {
    const content = `
      <div class="cardProduct">
        <div class="imageProduct">
          <img src="${product.imgURL}"/>
        </div>
        <div class="priceProduct">
          <span>${product.price}</span>
          <span>${product.currency}</span>
        </div>
      </div>
    `
    document.getElementById('app').insertAdjacentHTML('beforeend', content)
  })
  
}

showdata() 

async function borderAnimation() {
  var productsTarget = document.getElementById('app')
  var cardElement = document.querySelectorAll('.cardProduct');


  // productsTarget.addEventListener('mouseenter', function() {
  //   animation.pause
  // })
  anime({
    targets: '.cardProduct',
    easing: 'linear',
    keyframes: [
      {borderColor: '#f00'},
      {borderColor: '#ccc'},
    ],
    delay: function(el, i, l) {
      return i * 2000
    },
    loop: true
  })

  var animation = anime({
      targets: '.cardProduct',
      easing: 'linear',
      keyframes: [
        {borderColor: '#f00'},
        {borderColor: '#ccc'},
      ],
      delay: function(el, i, l) {
        return i * 1000
      },
      loop: true
    })

    cardElement.forEach(el => {
        el.addEventListener('mouseenter', (event) => {
          anime({
            targets: el,
            borderColor: ['#000'],
          })
      }),

        el.addEventListener('mouseleave', (event) => {
          anime({
            targets: el,
            borderColor: ['#ccc'],
          })
        })
      }
    )
}




