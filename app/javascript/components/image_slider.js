

const slider = () => {
const name = document.querySelector('.name_index h1')
const description1 = document.querySelector('.description_index h2')
const description2 = document.querySelector('.description_index h3')
const pictures = document.querySelectorAll('.images')

window.addEventListener('load', (event) => {
  console.log(event)
  name.classList.add('active')

  setTimeout(() => {
    description1.classList.add('active')
    description2.classList.add('active')
    ;
  }, 350);


  // pictures.forEach(picture => {
  // picture.classList.add('active')
  // })
})



}

export { slider }
