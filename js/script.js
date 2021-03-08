try {
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
} catch(err) {
	console.warn("Старт модуля Slider обернулся неудачей: ${err}")
}

try {
	const feedbackLink = document.querySelector(".contact-link");
	const feedbackPopup = document.querySelector(".modal-feedback");
	const feedbackClose = feedbackPopup.querySelector(".modal-close");
	const form = feedbackPopup.querySelector("form");
	const name = feedbackPopup.querySelector("[name=name]");
	const email = feedbackPopup.querySelector("[name=email]");
	const message = feedbackPopup.querySelector("[name=message]");

	let isStorageSupport = true;
	let storage_name = "";
	let storage_email = "";

	try {
		storage_name = localStorage.getItem("name");
		storage_email = localStorage.getItem("email");
	} catch (err) {
		isStorageSupport = false;
	}

	feedbackLink.addEventListener("click", function (evt) {
		evt.preventDefault();
		feedbackPopup.classList.add("modal-show");
		if (storage_name && storage_email) {
			name.value = storage_name;
			email.value = storage_email;
			message.focus();
		} else {
			name.focus();
		}
	});

	feedbackClose.addEventListener("click", function (evt) {
		evt.preventDefault();
		feedbackPopup.classList.remove("modal-show");
		feedbackPopup.classList.remove("modal-error");
	});

	form.addEventListener("submit", function (evt) {
		if (!name.value || !email.value || !message.value) {
			evt.preventDefault();
			feedbackPopup.classList.remove("modal-error");
			feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
			feedbackPopup.classList.add("modal-error");
		} else {
			if (isStorageSupport) {
				localStorage.setItem("name", name.value);
				localStorage.setItem("email", email.value);
				feedbackPopup.classList.remove("modal-show");
				feedbackPopup.classList.remove("modal-error");
			}
		}
	});

	window.addEventListener("keydown", function (evt) {
	  if (evt.keyCode === 27) {
	    if (feedbackPopup.classList.contains("modal-show")) {
	    	evt.preventDefault();
	    	feedbackPopup.classList.remove("modal-show");
	    	feedbackPopup.classList.remove("modal-error");
	    }
	  }
	});
} catch(err) {
	console.warn("Старт модуля Feedback обернулся неудачей: ${err}")
}