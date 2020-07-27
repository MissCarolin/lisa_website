
const slider = () => {

const name = document.querySelector('.name_index h1')
const description1 = document.querySelector('.description_index h2')
const description2 = document.querySelector('.description_index h3')
const pictures = [...document.querySelectorAll('.images')]


window.addEventListener('load', (event) => {
  console.log(event)
  name.classList.add('active')

  setTimeout(() => {
    description1.classList.add('active')
    description2.classList.add('active')
    ;
  }, 300);
})

  window.addEventListener('scroll', (event) => {
     pictures.map(picture => {
      const slideInAt = (window.scrollY + window.innerHeight) - picture.height / 2;
      const imageBottom = picture.offsetTop + picture.height
      const isHalfShown = slideInAt > picture.offsetTop;
      const isNotScrolledPast = window.scrollY < imageBottom;
      if (isHalfShown && isNotScrolledPast) {
        picture.classList.add('active');
      } else {
        picture.classList.remove('active')
      }
    })
  });


}

export { slider }
