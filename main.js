const btnMenu = document.getElementById('btn');

function toggleMneu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active')
}

btnMenu.addEventListener('click', toggleMneu);