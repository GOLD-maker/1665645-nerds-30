// Map

ymaps.ready(init);
var myMap;
var myPlacemark;
function init () {
    myMap = new ymaps.Map('map', {
        center: [59.93905, 30.3215],
        zoom: 17
    });
    myPlacemark = new ymaps.Placemark([59.938774968796345, 30.32316627976146], {
        hintContent: "Россия, Санкт-Петербург, Большая Конюшенная улица, 19/8"
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map-marker.png',
        iconImageSize: [231, 190],
        iconImageOffset: [-50, -170]
    });
    myMap.geoObjects.add(myPlacemark);
    myMap.controls.remove('trafficControl'),
    myMap.controls.remove('geolocationControl'),
    myMap.controls.remove('searchControl'),
    myMap.controls.remove('rulerControl'),
    myMap.controls.remove('typeSelector'),
    myMap.behaviors.disable('scrollZoom');
}

// Modal

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