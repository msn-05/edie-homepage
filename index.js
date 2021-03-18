function showNav() {
  let navbar = document.getElementById("myTopnav");
  navbar.classList.toggle('responsive');
  let btn = document.getElementById('showBtn');
  btn.classList.toggle('fa-bars');
  btn.classList.toggle('fa-times');
}