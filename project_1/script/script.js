// var now = 0;
// var gaesu = $(".slide").length;
let slideIndex = 0;
sliding();

function sliding(dir) {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(sliding, 3000); // 3초마다 슬라이드 변경
}

// function autoSlide() {
//   let slides = document.getElementsByClassName("slide");
//   for (let i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {
//     slideIndex = 1;
//   }
//   slides[slideIndex - 1].style.display = "block";
//   setTimeout(autoSlide, 3000); // 3초마다 슬라이드 변경
// }

// // 초기 슬라이드 인덱스 설정
// let slideIndex = 0;
// autoSlide();
