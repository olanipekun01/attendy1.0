let profileImage = document.querySelector('#profileImage');
let profileNavbarCard = document.querySelector('.profile-navbar-card');

profileImage.onclick = () => {
    profileNavbarCard.classList.toggle('active');
}

window.onscroll = () => {
    profileNavbarCard.classList.remove('active');
}