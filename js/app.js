document.addEventListener('DOMContentLoaded', function () {

var toggleMenu = document.querySelector('.toggle');
var listMenu = document.querySelector('nav');

// Rozwijane menu w mobile
toggleMenu.addEventListener("click", function(){
  listMenu.classList.toggle("show");
})
});
