const navbar = document.querySelector('#main-header nav');
document.onscroll = () => {
    if(document.documentElement.scrollTop > 700) {
        navbar.classList.add('scroll-on');
    }else {
        navbar.classList.remove('scroll-on')
    }
}