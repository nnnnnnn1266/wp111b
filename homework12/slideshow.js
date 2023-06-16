document.addEventListener("DOMContentLoaded", function(event) {
    var images = document.querySelectorAll(".slideshow img");
    var currentImageIndex = 0;
    
    setInterval(function() {
      images[currentImageIndex].classList.remove("active");
      currentImageIndex = (currentImageIndex + 1) % images.length;
      images[currentImageIndex].classList.add("active");
    }, 3000); // 設定輪播間隔時間（毫秒）
  });
