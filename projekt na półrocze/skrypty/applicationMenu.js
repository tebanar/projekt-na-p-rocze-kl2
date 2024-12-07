const openMenu = () => {
  console.log("otwarte");
  menuContainer.style.display = "block";
};

const closeMenu = () => {
  console.log("zamkniete");
  menuContainer.style.display = "none";
};

menu.addEventListener("click", () => {
  openMenu();
});

menuClose.addEventListener("click", () => {
  closeMenu();
});
