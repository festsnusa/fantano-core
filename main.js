let images = document.querySelectorAll('.main__card__img')
let closes = document.querySelectorAll('.detail__close')

images.forEach((image, i) => {
  image.addEventListener('click', processImage.bind(null, i, image))
})

closes.forEach((close, i) => {

  close.addEventListener('click', () => {

    let detail = document.querySelectorAll('.detail')[i]
    detail.classList.remove('active')

  })
})

  
function processImage(i, image) {

    let detail = document.querySelectorAll('.detail')[i]

    detail.classList.add('active')

    let detailImage = document.querySelectorAll('.detail__image')[i]
    detailImage.src = image.src
    detailImage.alt = image.alt
}

window.onkeydown = function( event ) {
  if ( event.keyCode == 27 ) {
    
    let details = document.querySelectorAll('.detail')

    details.forEach(e=> {
      e.classList.remove('active')
    })
  }
};
