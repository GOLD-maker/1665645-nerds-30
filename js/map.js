ymaps.ready(init);
var myMap;
var myPlacemark;
function init () {
    myMap = new ymaps.Map('map', {
        center: [59.939, 30.32316627976146],
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