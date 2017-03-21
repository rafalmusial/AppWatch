document.addEventListener('DOMContentLoaded', function () {

var toggleMenu = document.querySelector('.toggle');
var listMenu = document.querySelector('nav');

toggleMenu.addEventListener("click", function(){

  listMenu.classList.toggle("show");

})
});
