const btn = document.querySelector('.float-btn');
const topOfScreen = document.querySelector('#top')

const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// If you want to go to a certain section use it's ID
const scrollToSection = () => {
   topOfScreen.scrollIntoView()
}