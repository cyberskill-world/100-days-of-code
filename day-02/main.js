document.addEventListener('DOMContentLoaded', function () {
    const smallImages = document.querySelectorAll('.fex.cursor-pointer img');
    
    smallImages.forEach(function (image) {
      image.addEventListener('click', function () {
        const newSrc = this.src;
        
        const mainImage = document.getElementById('main-image');
        mainImage.src = newSrc;
      });
    });
  });
  