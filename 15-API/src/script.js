'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// test browser
if (navigator.geolocation) 
  navigator.geolocation.getCurrentPosition(function(position) {
    console.log('position: ', position); //1
    // const latitude = position.coords.latitude;
    const { latitude }  = position.coords;  //* use destructuring
    const { longitude }  = position.coords;  //* use destructuring
    
    console.log(latitude, longitude);
    console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

    // create array
    const coords = [latitude, longitude];

    const map = L.map('map').setView(coords, 13);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
         '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    //with this function we can take coordinates of pressed point on the map
    map.on('click', function(mapEvent) {
      console.log('mapEvent ', mapEvent);
      const { lat, lng } = mapEvent.latlng; 
      //latlng: D {lat: 41.30063669634558, lng: 69.22760009765626}

      L.marker([lat, lng]).addTo(map)
      .bindPopup(L.popup({
        maxWidth: 350,
        minWidth: 150,
        autoClose: false,
        closeOnClick: false,
        className: 'running-popup'
      }))
      .setPopupContent('Workout')
      .openPopup();
    
    })

  }, 
  function() {
    alert('Could not get your position!')
  })

// position:  

// GeolocationPosition {coords: GeolocationCoordinates, timestamp: 1646402211204}
 
// coords: GeolocationCoordinates  //!
// accuracy: 9053.036283429326
// altitude: null                   
// altitudeAccuracy: null
// heading: null
// latitude: 41.2994958            //!
// longitude: 69.2400734           //! 
// speed: null
// [[Prototype]]: GeolocationCoordinates
// timestamp: 1646402178547
// [[Prototype]]: GeolocationPosition
// script.js:22 41.2994958 69.2400734