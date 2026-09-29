const carouselElement = document.querySelector("#guideCarousel");
const slideStamp = document.querySelector(".slide-stamp");
const carousel = bootstrap.Carousel.getOrCreateInstance(carouselElement);

carouselElement.addEventListener("slid.bs.carousel", (event) => {
	const currentSlide = String(event.to + 1).padStart(2, "0");
	slideStamp.innerHTML = `${currentSlide} <i> / 03</i>`;
});

if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
	carousel.pause();
}
