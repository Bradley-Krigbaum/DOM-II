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





