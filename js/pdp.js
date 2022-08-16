function renderProductsToSlider() {
  let productFrag = document.createDocumentFragment()

  PRODUCT_LIST_PDP.forEach(item => {

      let swiperSlider = document.createElement("div")
      
      swiperSlider.setAttribute("class","swiper-slide")
      swiperSlider.innerHTML = `
      <div class="product-card">
      <img class="card__img" src="${item.image}" alt="funkin">
      <h4>${item.title}</h4>
      <p>${item.subtitle}</p>
      <div class="stars">
        <img src="./images/plp/Star-fill.svg" alt="star">
        <img src="./images/plp/Star-fill.svg" alt="star">
        <img src="./images/plp/Star-fill.svg" alt="star">
        <img src="./images/plp/Star-fill.svg" alt="star">
        <img src="./images/plp/Star-fill.svg" alt="star">

        <span>(32 reviews)</span>
      </div>

      <p>${item.price}</p>
      <a href="#!">Shop now</a>
    </div>
      `
      productFrag.appendChild(swiperSlider)
  })


  document.querySelector(".product-wrapper").appendChild(productFrag)
}
renderProductsToSlider()


// you might like section
new Swiper(".mySwiper", {
  slidesPerView: 3,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
/*
new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // breakpoints: {
  //   0: {
  //     slidesPerView: 2,
  //     spaceBetween: 20,
  //   },
  //   600: {
  //     slidesPerView: 2,
  //     spaceBetween: 20,
  //   },
  //   768: {
  //     slidesPerView: 3,
  //     spaceBetween: 40,
  //   },
  //   1024: {
  //     slidesPerView: 4,
  //     spaceBetween: 50,
  //   },
  // },
  
});

*/


new Swiper(".mySwiper-hero", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });

  

  new Swiper(".mySwiper1", {
    slidesPerView: 3,
    // spaceBetween: 60,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
    
  });

  new Swiper(".mySwiper-recipe", {
    // spaceBetween: 100,
    slidesPerView: 2,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
    },
    
  });

