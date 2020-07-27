

const slider = () => {
const name = document.querySelector('.name_index h1')
const description = document.querySelector('.description_index h2')
const pictures = document.querySelectorAll('.images')

window.addEventListener('load', (event) => {
  console.log(event)
  name.classList.add('active')


  // pictures.forEach(picture => {
  // picture.classList.add('active')
  // })
})



}

export { slider }
