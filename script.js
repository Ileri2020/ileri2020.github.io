const side_toggle = document.getElementById("side_toggle");
const sidebar = document.getElementById("sidebar_container");
const profile_img2 = document.getElementById("profile_img2");

side_toggle.addEventListener("click", () => {
    sidebar.classList.toggle("hide");
    profile_img2.classList.toggle("show");
})