
function showpage2(){
    document.getElementById('products').style.display = "none";
    document.getElementById('products-2').style.display = "block";
    let button2 = document.getElementById('button-1-22');
    button2.style.color = "gray";
    button2.style.borderColor = "gray";
   let button = document.getElementById('button-1-2');
   button.style.color = "black";
   button.style.borderColor = "black";
}
document.getElementById('products-2').style.display = "none";
function showpage1(){
    document.getElementById('products-2').style.display = "none";
    document.getElementById('products').style.display = "block";
    let button = document.getElementById('button-1-2');
    button.style.color = "gray";
    button.style.borderColor = "gray";
    let button2 = document.getElementById('button-1-22');
    button2.style.color = "black";
    button2.style.borderColor = "black";
}
function order(){
    document.getElementById('container').style.display = 
    "block";
    document.getElementById('overlay').style.display = 
    "block";
}
function closeorder(){
    document.getElementById('container').style.display = 
    "none";
    document.getElementById('overlay').style.display = 
    "none"
}
function order2(){
    document.getElementById('container2').style.display =
    "block";
    document.getElementById('overlay2').style.display =
    "block";
}
function closeorder2(){
    document.getElementById('container2').style.display =
    "none";
    document.getElementById('overlay2').style.display =
    "none";
}

function toggleNav() {
    let navbarList = document.getElementById("nav-bar-list");
    navbarList.classList.toggle("active");
   
   
}
document.getElementById('toggleNav').addEventListener('click', function() {
    var navbar = document.getElementById('nav-bar');
    var overlay = document.getElementById('overlay');
    
    navbar.classList.toggle('open');
    overlay.style.display = navbar.classList.contains('open') ? 'block' : 'none';
  });
  function overlayHide(){
   let overlayy = document.getElementById('overlay');
   overlayy.style.display = "none";
    let navbarclose = document.getElementById('nav-bar-list');
    navbarclose.classList.remove('active');
  } 
