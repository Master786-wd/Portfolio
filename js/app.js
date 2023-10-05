/*==================== Preloader JS ====================*/
$(document).ready(function (e) {
  setTimeout(function () { $('#loading').hide(); }, 100);
});
/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector("#menu-icon");

let nav = document.querySelector(".navbar");
menuIcon.onclick = () => {
    
  menuIcon.classList.toggle("bx-x");
    
  nav.classList.toggle("active");
};  
/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll("section");

let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {

  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {

      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href *=" + id + "]")
          .classList.add("active");
      });
    }
  });
  /*==================== sticky navbar ====================*/
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  menuIcon.classList.remove("bx-x");

  nav.classList.remove('active');
  
};

/*==================== scroll reveal ====================*/
ScrollReveal({
    //reset : true,
    distance : '80px',
    duration : 2000,
    delay : 200
});

ScrollReveal().reveal('.home-content, .heading', {origin : 'top'});

ScrollReveal().reveal('.home-img, .services-container, .contact form, .portfolio-container', {origin : 'bottom'});

ScrollReveal().reveal('.home-content h1, .about-img', {origin : 'left'});

ScrollReveal().reveal('.home-content p , .about-content, .tabs', {origin : 'right'});

/*==================== typed js ====================*/
const typed = new Typed('.multiple-text', {
  
    strings : ['Frontend Developer', 'CMS Developer', 'Backend Developer'],
    typeSpeed : 100,
    backSpeed : 100,
    backDelay : 1000,
    loop : true

});
/*==================== Switcher js ====================*/
let themebtn = document.querySelectorAll('.theme-buttons');

themebtn.forEach(color =>{
  
    color.addEventListener('click', () => {
      color.classList.add('active');
      let dataColor = color.getAttribute('data-color');

      document.querySelector(':root').style.setProperty('--main-color', dataColor);
    });

    color.addEventListener('mouseleave', () =>{
      setTimeout(() => {
        color.classList.remove('active');
      }, "1500");
    });
});
/*==================== theme-image-change js ====================*/
themebtn.forEach(color =>{
  let img1 = document.getElementById('pic-1');
  let img2 = document.getElementById('pic-2');
  let dataColor = color.getAttribute('data-color');

  color.addEventListener('click', () => {
  if(dataColor==="#00adef"){
    img1.src="./images/profile-pics/Blue-1.png";
    img2.src="./images/profile-pics/Blue-2.png";
  }
  else if(dataColor==="#0ef"){
    img1.src="./images/profile-pics/Green-1.png";
    img2.src="./images/profile-pics/Green-2.png";
  }
  else if(dataColor==="#f54266"){
    img1.src="./images/profile-pics/Red-1.png";
    img2.src="./images/profile-pics/Red-2.png";
  }
  else if(dataColor==="#730eeb"){
    img1.src="./images/profile-pics/Purple-1.png";
    img2.src="./images/profile-pics/Purple-2.png";
  }
});
});
/*==================== mode-switcher js ====================*/
let toggle = document.getElementById('mode');

toggle.addEventListener('click', () => {

     document.body.classList.toggle('light-mode');
     
})
/*==================== curs animation js ====================*/
let curs = document.querySelector('.follow-cursor');

document.addEventListener('mousemove', movecurs);

function movecurs(e){
    let x = e.clientX;
    let y = e.clientY;

    curs.style.left = `${x}px`;
    curs.style.top = `${y}px`;
}

let anchors = Array.from(document.querySelectorAll('a')); 

anchors.forEach(anchor =>{
    anchor.addEventListener('mouseover', ()=>{
        curs.classList.add('grow');
    });
    anchor.addEventListener('mouseleave', ()=>{
        curs.classList.remove('grow');
    });
}); 
/*==================== toggle icons tabs ====================*/
let filter = document.querySelector(".filter-icon");

let tabs = document.querySelector(".tabs ul");

filter.onclick = () => {

  filter.classList.toggle("bx-x");
  tabs.classList.toggle("show");
  
};
