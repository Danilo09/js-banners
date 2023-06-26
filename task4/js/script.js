const showdata = async () =>{
    const queryURL = "https://rekrutacja.webdeveloper.rtbhouse.net/files/banner_vip.json";
    const dataResponse = await fetch(queryURL)
    const dataJson = await dataResponse.json()
    displayProducts(dataJson)
}
  
const displayProducts = (result) => {
    result.offers.forEach(({ imgURL, price, currency, priceText, city, country }) => {
    const content = `
    <div class="mainContent mySlides fade" style="background-image: url(${imgURL})">
        <div class="locationContent">
            <span class="country"><p class="nameCountry">${country}</p></span>
            <span class="city"><p class="nameCity">${city}</p></span>
        </div>
        <div class="priceContent">
            <span class="from">${priceText}</span>
            <span class="price">${price} ${currency}</span>
        </div>
        <div class="buyContent">
            <a class="buy">Book now</a>
        </div>
    </div>
    `
    document.getElementById('app').insertAdjacentHTML('beforeend', content)
})
    animationBanners();
    showSlides();
    changeSize();
}
  
showdata() 

let slideIndex = 0;

const showSlides = () => {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
    slides[slideIndex-1].style.display = "flex";
    animationBannersSlides()
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 8000);
}

const changeSize = () => {

    const lenghtData = document.querySelectorAll('.city');

    lenghtData.forEach((e, i) => {
        if(e.lastElementChild.innerHTML.length > 13) {
            e.classList.add('city-opt-content')
        }
    })
    
}



const animationBanners = async () => {

    const appEffect = anime.timeline({
        targets: '#app'
    })
    appEffect
    .add({
        opacity: 0,
        duration: 1000,
    })
    .add({
        opacity: 1,
    })

    anime({
        targets: '.topContent',
        translateX: [
            { value: -250, duration: 0, delay: 500 },
            { value: 0, duration: 2000, delay: 500 }
        ],
        translateY: [
            { value: 250, duration: 1000, delay: 500 },
            { value: 0, duration: 2000, delay: 500 }
        ],
        easing: 'easeOutExpo',
        loop: false
    })

    const dotsEffect = anime.timeline({
        targets: '.dots'
    })
    dotsEffect
    .add({
        opacity: 0,
        duration: 3000,
    })
    .add({
        opacity: 1,
    })

    let solid = document.querySelector('.solid');
    let container = document.querySelector('#app');
    const blockReveal = (solid, container) => {
        let blockWidth = container.clientWidth;
        container.style.width = blockWidth + 'px';
        const solidAnimation = () => {
            let tl = anime.timeline({
                easing: 'easeOutExpo',
                duration: 2000,
            });

            tl
            .add({
                targets: solid,
                height: 600,
                complete: function (tl) {
                    container.style.opacity = "1";
                    solid.style.top = "0";
                }
            })
            .add({
                targets: solid,
                height: '0',
                bottom: 0
            });
        }
        solidAnimation();
    };
    
    blockReveal(solid, container);
}

const animationBannersSlides = async () =>{
    const countryEffect = anime.timeline({
        targets: '.country',
    })
    countryEffect
    .add({
        width: 0,
    })
    .add({
        width: 100 + '%',
        duration: 2000,
    },3000)
    .add({
        width: 0,
    },6000)

    const nameCountry = anime.timeline({
        targets: '.nameCountry'
    }, 10000)
    nameCountry
    .add({
        opacity: 1,
        duration: 2000,
        translateY: [
            { value: 20, duration: 0, delay: 200 },
            { value: 0, duration: 1000, delay: 1000 },
            { value: -200, duration: 1000, delay: 500 }
        ],
    }, 3200)

    const cityEffect = anime.timeline({
        targets: '.city',
        loop: false,
    })
    cityEffect
    .add({
        width: 0
    })
    .add({
        width: 100 + '%',
        duration: 2000
    }, 3200)
    .add({
        width: 0
    }, 7000)


  
    const nameCity = anime.timeline({
        easing: 'easeOutExpo',
        targets: '.nameCity',
        loop: true
    })
    nameCity
    .add({
        translateY: [
            { value: 200, duration: 0, delay: 200 },
            { value: 0, duration: 1200, delay: 1000 },
            { value: -200, duration: 1000, delay: 500 }
        ],
    }, 3300)

    const priceContent = anime.timeline({
        easing: 'easeOutExpo',
        targets: ['.from', '.price']
    })
    priceContent
    .add({
        translateY: [
            { value: 200, duration: 0, delay: 500 },
            { value: 0, duration: 3000, delay: 500 },
            { value: 200, duration: 5000, delay: 500 }
        ],
    }, 3300)

    const buyContent = anime.timeline({
        easing: 'easeOutExpo',
        targets: ['.buy']
    })
    buyContent
    .add({
        translateX: [
            { value: 500, duration: 0, delay: 500 },
            { value: 0, duration: 3000, delay: 500 },
        ],
    }, 3300)

    const buyContentBefore = anime.timeline({
        easing: 'easeOutExpo',
        targets: ['.buy:before']
    })
    buyContentBefore
    .add({
        translateX: [
            { value: -500, duration: 0, delay: 500 },
            { value: 0, duration: 3000, delay: 500 },
        ],
    }, 3300)

}
