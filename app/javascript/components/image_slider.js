
const slider = () => {

function debounce(func, wait = 20, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    };

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

  const checkSlide = () => {
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
  };

window.addEventListener('scroll', debounce(checkSlide))

}

export { slider }
