// Your code goes here

const navBarContainer = document.querySelectorAll('.main-navigation')

navBarContainer.forEach(element => {
    element.style.zIndex = "10";
})



const navBar = document.querySelectorAll('.nav-link')

navBar.forEach(element => {
    element.addEventListener('mouseover', () => {
        element.style.transform = "scale(1.1)";
        element.style.color = 'crimson';
        element.style.transition = "all 0.3s";
    })

    element.addEventListener('mouseleave', () => {
        element.style.transform = 'scale(1)';
        element.style.color = 'black';
        element.style.transition = 'all 0.3s';
    })
})



const siteLogo = document.querySelector('.logo-heading')

siteLogo.addEventListener('dblclick', () => {
    siteLogo.style.color = 'crimson';
})



const imgContent = document.querySelectorAll('.img-content')

imgContent.forEach(element => {
    element.addEventListener('mouseenter', () => {
        element.style.transform = "scale(1.1)";
        element.style.transition = "all 0.3s";
    })

    element.addEventListener('mouseleave', () => {
        element.style.transform = 'scale(1)';
        element.style.transition = 'all 0.3s';
    })
})



const destinationShadow = document.querySelectorAll('.destination')

destinationShadow.forEach(element => {
    element.addEventListener('mouseenter', () => {
        element.style.transform = 'scale(1.05)';
        element.style.borderRadius = '15px';
        element.style.boxShadow = '-10px 10px 10px grey';
        element.style.transition = 'all 0.3s';
    })

    element.addEventListener('mouseleave', () => {
        element.style.transform = 'scale(1)';
        element.style.borderRadius = '15px';
        element.style.boxShadow = 'none';
        element.style.transition = 'all 0.3s';
    })
})

const h4Change = document.querySelectorAll('h4, h2')

h4Change.forEach(element => {
    element.addEventListener('click', () => {
        element.style.color = 'crimson';
        element.style.transition = 'all 0.3s';
    })

    element.addEventListener('dblclick', () => {
        element.style.color = 'black';
        element.style.transition = 'all 0.3s';
    })
})

const buttonColorInvert = document.querySelectorAll('.btn')

buttonColorInvert.forEach(element => {
    element.addEventListener('click', () => {
        element.style.color = 'black';
        element.style.transition = 'all 0.3s';
    })
})

