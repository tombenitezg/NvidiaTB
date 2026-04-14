const myCarouselElement = document.querySelector('#carouselExample')

const carousel = new bootstrap.Carousel(myCarouselElement, {
    ride: true,
    interval: 3000,
    pause: false
})



function abrirVentana() {

    alert('Serás redireccionado a otro sitio web al hacer click en Aceptar')

    var url = 'https://www.spdigital.cl/categories/componentes-tarjeta-de-video-tarjeta-video-nvidia/?page=1&sort_by=RELEVANCE%3AASC&f=serie.in%3Ageforce-rtx-40-series';
  
    window.open('https://www.spdigital.cl/categories/componentes-tarjeta-de-video-tarjeta-video-nvidia/?page=1&sort_by=RELEVANCE%3AASC&f=serie.in%3Ageforce-rtx-40-series', '_blank');
  }

  
