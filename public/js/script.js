//!Drop Down Liste
function toggleDropdown() {
    let dropdownContent = document.getElementById("myDropdown");
    dropdownContent.classList.toggle("show");
  }

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  };
//!Menu Burger 
let ul = document.querySelector('.ul');
let closeMenu = document.querySelector('.closeMenu');
let openMenu = document.querySelector('.openMenu');
let menu_items = document.querySelectorAll('nav .ul li a');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    ul.style.display = 'flex';
    ul.style.top = '0';
}
function close(){
    ul.style.top = '-100%';
}


//! Button To Top
window.addEventListener('scroll', function() {
    let backToTopButton = document.querySelector('.back-to-top');
    if (window.pageYOffset > 100) {
      backToTopButton.classList.add('active');
    } else {
      backToTopButton.classList.remove('active');
    }
  });
  
//! slide video 1 
function openPopup() {
    document.getElementById("popupOverlay").style.display = "flex";
  }
  
  function closePopup() {
    document.getElementById("popupOverlay").style.display = "none";
  }
//! slide video 2


//!slide image events
let box_slide = document.querySelector(".box_slide");
let gen = false,
  startX,
  scrol;

let slidBtn = document.querySelectorAll(".btnsslid button");


let firstWidth = document.querySelector(".card").offsetWidth;
slidBtn.forEach(btn => {
  btn.addEventListener('click',()=>{
    box_slide.scrollLeft += btn.id === "slidBtn1" ? -firstWidth : firstWidth;

})
});

const estart = (e) => {
  gen = true;
  box_slide.classList.add("draging");
  startX = e.pageX;
  scrol = box_slide.scrollLeft;
};
const draga = (e) => {
  if (!gen) return;
  box_slide.scrollLeft = scrol - (e.pageX - startX);
};
const dragStop = (e) => {
  gen = false;
  box_slide.classList.remove("draging");
};
box_slide.addEventListener("mouseover", draga);
box_slide.addEventListener("mousedown", estart);
document.addEventListener("mouseup", dragStop);
