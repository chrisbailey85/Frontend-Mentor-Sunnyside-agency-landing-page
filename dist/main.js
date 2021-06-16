const hamburgerBtn = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const arrow = document.querySelector('.arrow__img')
// mobile nav 


hamburgerBtn.addEventListener('click', () => {
    !hamburgerBtn.classList.contains('open') ? openNav() : closeNav();
})

arrow.addEventListener('click', arrrowScroll)
function openNav() {
    hamburgerBtn.classList.toggle('open');
    hamburgerBtn.setAttribute('aria-expanded', 'true')
    nav.classList.toggle('open');
    arrow.style.opacity = 0;
}

function closeNav() {
    hamburgerBtn.classList.toggle('open');
    hamburgerBtn.setAttribute('aria-expanded', 'false')
    nav.classList.toggle('open');
    arrow.style.opacity = 1;
}

function arrrowScroll() {
    let viewport = window.innerHeight;
    window.scrollTo({
        top: viewport,
        behavior: 'smooth'
    });
}