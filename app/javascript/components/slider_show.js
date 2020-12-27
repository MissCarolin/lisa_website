function addClasses() {
    const image = document.querySelector('.image-show')
    const headline = document.querySelector('.headline-show')
    const description = document.querySelector('.show-name-description')

    console.log("class called")
    image.classList.add('active')

    setTimeout(() => {
        headline.classList.add('active')
        description.classList.add('active');
    }, 300);
    console.log("added classes");
}

const sliderShow = () => {
    window.addEventListener('load', (event) => {
        addClasses();
        console.log('load')
    });

    document.addEventListener('turbolinks:render', (event) => {
        setTimeout(() => {
            addClasses();
        }, 300);
    });

    console.log('slide success')
};

export { sliderShow }