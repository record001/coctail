function renderProductsToSlider() {
    let productFrag = document.createDocumentFragment()

    PRODUCT_LIST.forEach(item => {

        let swiperSlider = document.createElement("div")
        
        swiperSlider.setAttribute("class","swiper-slide")
        swiperSlider.innerHTML = `
        <img class="product__img" src=${item.image} alt="coctail_funkin1">
    
        <h4 class="product__title">${item.title}</h4>
        <p class="product__description">${item.describtion}</p>
        <a class="product__cta" href="#!">Shop now</a>
        `
        productFrag.appendChild(swiperSlider)
    })
  

    document.querySelector(".swiper-wrapper").appendChild(productFrag)
}
renderProductsToSlider()



 new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    
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
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
    
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