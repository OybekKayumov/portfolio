// 1
// const p = document.querySelector('p');

// setTimeout(() => {
//   p.textContent = 'My name is JavaScript!'
// }, 3000);

// p .style.color = 'red'

// setTimeout(() => {console.log("this is the first message")}, 5000);
// setTimeout(() => {console.log("this is the second message")}, 3000);
  
// setTimeout(() => {
//   console.log("this is the third message");
//   p.innerHTML = 'My name is JavaScript!';
// }, 1000);

// [1, 2, 3].map(v => v * 2);
//callback functions alone DO NOT make code asynchronous

// 2
// const img = document.querySelector('.bear');
// img.src = 'img/bear.jpg';
// img.addEventListener('load', function() {
//   img.classList.add('fadeIn');
// });

// p.style.width = '300px';
// p.style.fontSize = '24px';
// p.style.fontFamily = 'Rubik';

//! JSON is basically JavaScript Object, but converted to a String

'use strict'

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// XMLHttpRequest();           //* old school

// 2 for multiple countries
const getCountryData = function(country) { 

  const request = new XMLHttpRequest();

  //CORS : cross origin resource sharing
  // type of request(GET) and string(url) : SEND REQUEST
  // request.open('GET', 'https://restcountries.com/v3.1/name/portugal') 
  
  // 2
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`) 
  
  // data = request.send();
  request.send();           //*  SEND REQUEST

  // get result
  // console.log('request resText: ', request.responseText);  //* same, but not works

  request.addEventListener('load', function() {
    // console.log('request resText: ', this.responseText); //* see consol NO JSON
    
    // we need to convert this data to an actual JS object, 
    // because what we have here right now is JSON - big string of text
    
    // const data = JSON.parse(this.responseText)
    // console.log('data: ', data);                 //* see consol : data:  [{…}]
    
    // destructure code
    
    // const [data] = JSON.parse(this.responseText)[0]  //! same
    const [data] = JSON.parse(this.responseText)
    console.log('data: ', data);                 //* see consol : data:  [{…}]
    
    // Build a card component
    const html = `
          <article class="country">
              <img class="country__img" src="${data.flags.svg}" alt="" srcset="">
              <div class="country__data">
                <h3 class="country__name">${data.name}</h3>
                <h3 class="country__region">${data.region}</h3>
                <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(2)}</p>
                <p class="country__row"><span>🗣️</span>${data.languages.por}</p>
                <p class="country__row"><span>💰</span>${data.currencies.EUR.name}</p>
              </div>
          </article>       
    
    `;
    
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
    
    console.log(data.altSpellings[2]);
    console.log(data.translations.ara.official);
    console.log(data.translations.rus.official);
    console.log(data.translations.rus.common);

  });
//2 end
}


//todo How to take data from Array and Object
// ${data.currencies[0].name} : means we take 1st element in array and send it's name to HTML

//* example: an array name: altSpellings: with four elements (4)
// ['PT', 'Portuguesa', 'Portuguese Republic', 'República Portuguesa']
// to take 'Portuguese Republic'
//todo console.log(data.altSpellings[2]);
//* Portuguese Republic

//! OBJECT
// translations: {ara: {…}, ces: {…}, cym: {…}, deu: {…}, est: {…}, …}

//? INSIDE
// translations:
// ara: {official: 'الجمهورية البرتغالية', common: 'البرتغال'}
// ces: {official: 'Portugalská republika', common: 'Portugalsko'}
// cym: {official: 'Portuguese Republic', common: 'Portugal'}
// deu: {official: 'Portugiesische Republik', common: 'Portugal'}
// ...

// we write:
// console.log(data.translations.ara.official);
// console.log(data.translations.rus.official);
// console.log(data.translations.rus.common);

//*  الجمهورية البرتغالية
//*  Португальская Республика
//*  Португалия

//TODO 2: Reuse code to create an element for multiple countries
// getCountryData('portugal')
// getCountryData('uzbekistan')


// create function for v.2

const getCountryDataV2 = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();
  
  request.addEventListener('load', function() {
    const [data] = JSON.parse(this.responseText);
    console.log('data: ', data);

    const html = `
      <article class="country">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
          <h3 class="country__name">${data.name}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(1)} people</p>
          <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
          <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
      </article>
    `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;    
  })
}

// getCountryDataV2('portugal') 
// getCountryDataV2('uzbekistan')

{/* <p class="country__row"><span>✈</span>${data.nativeName}</p>
<p class="country__row"><span>✈</span>${data.region}</p> */}


// TODO GET COUNTRY AND NEIGHBOUR

// 2
const renderCountry = function(data) {
  const html = `
      <article class="country">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
          <h3 class="country__name">${data.name}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(1)} people</p>
          <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
          <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
      </article>
    `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1; 

}

// 1
const getCountryAndNeighbourV2 = function (country) {

  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();
  
  request.addEventListener('load', function() {
    const [data] = JSON.parse(this.responseText);
    console.log('data: ', data);

    // Render country 1
    renderCountry(data)

    // Get neighbour country(2)
    // const neighbour = data.borders
    const [neighbour] = data.borders      //* take FIRST element from array : destructuring

    // if NO neighbour(island maybe) = borders: [] empty --> RETURN    //* borders: ['ESP']
    if (!neighbour) return

    // if has neighbour, create AJAX call 2 : search by CODE
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
    request2.send();
    
    request2.addEventListener('load', function() {

      // console.log(request2.responseText);  // get info about Spain
      console.log(this.responseText);  // get info about Spain NO JSON yet

      const data2 = JSON = JSON.parse(this.responseText)
      console.log(data2);

      renderCountry(data2)
    })
  });
};

getCountryAndNeighbourV2('portugal')