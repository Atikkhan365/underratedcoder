const words = ["Database SQL,MYSQL,MongoDB", "Datastructures JAVA,DSA,ARRAY,LL", "Allgorithms Stacks,Queues,Trees","Frontend HTML,CSS,JS,React", "Backend NodeJS,ExpressJS"];
let index = 0;
setInterval(() => {
    index = (index + 1) % words.length;
    document.getElementById("subject").textContent = words[index];
}, 5000);

const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
          progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
      }
    });