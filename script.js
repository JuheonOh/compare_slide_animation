const slider = document.getElementById("slider");
const beforeImage = document.querySelector(".before");
const afterImage = document.querySelector(".after");
const container = document.querySelector(".container");

let direction = 1; // 1이면 오른쪽, -1이면 왼쪽
let x = 0; // 초기 위치는 0
let currentImageIndex = 2; // 현재 이미지 인덱스

const images = ["images/a.png", "images/b.png", "images/c.png", "images/d.png", "images/e.png", "images/f.png"];

function animateSlider() {
  x += direction * 2; // 슬라이더의 이동 속도 조절 (숫자를 조정하여 속도를 변경할 수 있음)

  if (x > container.offsetWidth || x < 0) {
    direction *= -1; // 방향 전환

    if (x > container.offsetWidth) {
      // 오른쪽 벽에 닿았을 때
      beforeImage.src = images[currentImageIndex];
    } else if (x < 0) {
      // 왼쪽 벽에 닿았을 때
      afterImage.src = images[currentImageIndex];
    }
    currentImageIndex = (currentImageIndex + 1) % images.length; // 이미지 인덱스 업데이트
  }

  slider.style.left = x + "px";
  beforeImage.style.clip = `rect(0, 400px, 400px, ${x}px)`;
  afterImage.style.clip = `rect(0, ${x}px, 400px, 0)`;

  requestAnimationFrame(animateSlider); // 애니메이션 프레임 요청
}

// 애니메이션 시작
animateSlider();
