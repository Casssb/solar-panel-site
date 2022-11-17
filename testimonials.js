const images = document.querySelectorAll(".testimonial-img");

images.forEach((image) => {
  image.addEventListener("mousedown", () => {
    image.classList.toggle("image-zoom");
  });
});
