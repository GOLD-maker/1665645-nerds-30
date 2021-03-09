const first_dot = document.querySelector(".first-dot");
const second_dot = document.querySelector(".second-dot");
const third_dot = document.querySelector(".third-dot");
const first_slide = document.querySelector(".slider-item-1");
const second_slide = document.querySelector(".slider-item-2");
const third_slide = document.querySelector(".slider-item-3");

first_dot.addEventListener("click", function (evt) {
	evt.preventDefault();
	first_dot.classList.add("current");
	second_dot.classList.remove("current");
	third_dot.classList.remove("current");
	first_slide.classList.add("slide-current");
	second_slide.classList.remove("slide-current");
	third_slide.classList.remove("slide-current");
});

second_dot.addEventListener("click", function (evt) {
	evt.preventDefault();
	first_dot.classList.remove("current");
	second_dot.classList.add("current");
	third_dot.classList.remove("current");
	first_slide.classList.remove("slide-current");
	second_slide.classList.add("slide-current");
	third_slide.classList.remove("slide-current");
});

third_dot.addEventListener("click", function (evt) {
	evt.preventDefault();
	first_dot.classList.remove("current");
	second_dot.classList.remove("current");
	third_dot.classList.add("current");
	first_slide.classList.remove("slide-current");
	second_slide.classList.remove("slide-current");
	third_slide.classList.add("slide-current");
});