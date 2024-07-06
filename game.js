// function emailSend(){
// Email.send({
//    Host : "smtp.elasticemail.com",
//    Username : "username",
//    Password : "password",
//    To : 'them@website.com',
//    From : "you@isp.com",
//    Subject : "This is the subject",
//    Body : "And this is the body"
// }).then(
//  message => alert(message)
// );
// }
// let 
// var swiper = new Swiper(".home-slider", {
//     loop:true,
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });
let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
function showSlide(index) {
   slides.forEach((slide) => {
      slide.style.display = "none";
   });

   slides[index].style.display = "block";
}

function nextSlide() {
   currentIndex = (currentIndex + 1) % slides.length;
   showSlide(currentIndex);
}

// Change slide every 3 seconds
setInterval(nextSlide, 3000);

const observer =new IntersectionObserver((entries)=>{
   entries.forEach((entry)=>{
      console.log(entry)
      if (entry.isIntersecting) {
         entry.target.classList.add('show');
      }
      else{
         entry.target.classList.remove('show');
      }
   });
});
const imgElements=document.querySelectorAll('.img');
imgElements.forEach((el)=> observer.observe(el));

  