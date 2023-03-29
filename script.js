// tabs

let tabLinks = document.querySelectorAll(".tablinks");
let tabContent = document.querySelectorAll(".tabcontent");

tabLinks.forEach(function (el) {
   el.addEventListener("click", openTabs);
});

function openTabs(el) {
   let btnTarget = el.currentTarget;
   let country = btnTarget.dataset.country;

   tabContent.forEach(function (el) {
      el.classList.remove("active");
   });

   tabLinks.forEach(function (el) {
      el.classList.remove("active");
   });

   document.querySelector("#" + country).classList.add("active");

   btnTarget.classList.add("active");
}
