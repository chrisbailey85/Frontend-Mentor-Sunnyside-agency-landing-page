const hamburgerBtn = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

// mobile nav 
hamburgerBtn.addEventListener('click', () => {
    !hamburgerBtn.classList.contains('open') ? openNav() : closeNav();
})


function openNav() {
    hamburgerBtn.classList.toggle('open');
    hamburgerBtn.setAttribute('aria-expanded', 'true')
    nav.classList.toggle('open');
}

function closeNav() {
    hamburgerBtn.classList.toggle('open');
    hamburgerBtn.setAttribute('aria-expanded', 'false')
    nav.classList.toggle('open');
}