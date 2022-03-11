const test = () => console.log("test click");

const menuNav = () => {
  window.location.pathname = "/src/pages/dropMenu.html";
};

const dropItLikeItsHot = () => {
  const dropIt = document.querySelector(".custom-bg");
  const videoOverlay = document.querySelector(".bg-video-main");
  dropIt.style.filter = "hue-rotate(70deg)";
};

const mainLogoImg = document.querySelector(".signin-logo");

const blur = (mainLogoImg) => {
  mainLogoImg.style.height = "100px";
  console.log("mouse event");
};

const registerPage = () => (window.location.pathname = "/src/pages/index.html");

const searchResultsPage = () =>
  (window.location.pathname = "/src/pages/searchResults.html");

const createProfilePage = () =>
  (window.location.pathname = "/src/pages/createProfile.html");

const profilePage = () =>
  (window.location.pathname = "/src/pages/profile.html");

const notificationsPage = () =>
  (window.location.pathname = "/src/pages/notifications.html");

const chatPage = () => (window.location.pathname = "/src/pages/chat.html");

const searchPage = () => (window.location.pathname = "/src/pages/search.html");

const friendsPage = () =>
  (window.location.pathname = "/src/pages/friends.html");

const settings = () =>
  (window.location.pathname = "/src/pages/userSettings.html");