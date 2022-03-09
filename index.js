const test = () => console.log('test click')

const menuNav = () => {
    window.location.pathname = '/src/pages/dropMenu.html'
}

// const blur = () => {
//     const mainLogoImg = document.querySelector('.signin-logo')

//     mainLogoImg.onmouseover
//     console.log('mouse event')
// }

const mainLogoImg = document.querySelector('.signin-logo')

const blur = (mainLogoImg) => {
    mainLogoImg.style.height = '100px'
    console.log('mouse event')
}

const createProfilePage = () => window.location.pathname = '/src/pages/createProfile.html'

const profilePage = () => window.location.pathname = '/src/pages/profile.html'

const notificationsPage = () => window.location.pathname = '/src/pages/notifications.html'

const chatPage = () => window.location.pathname = '/src/pages/chat.html'

const searchPage = () => window.location.pathname = '/src/pages/search.html'

const friendsPage = () => window.location.pathname = '/src/pages/friends.html'

const settings = () => window.location.pathname = '/src/pages/userSettings.html'
