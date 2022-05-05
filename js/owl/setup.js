$('.owl-carousel').owlCarousel({
    loop:true, /*Permite navegar de forma infinita*/
    margin:10,
    nav:true, /*botões de navegação esão ativados*/
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})