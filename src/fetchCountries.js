import Notiflix from 'notiflix';
import { foundCountry, createCountryLi, clearCountry } from '.';

export function fetchCountries(name) {
  fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`
  )
    .then(r => {
      if (r.ok) {
        return r.json();
      } else {
        Notiflix.Notify.warning('Oops, there is no country with that name');
        clearCountry();
      }
    })

    .then(r => {
      console.log(r);
      switch (true) {
        case r.length >= 2 && r.length <= 10:
          Notiflix.Notify.info(`I have ${r.length} results waiting for you.`);
          for (let i = 0; i < r.length; i++) {
            createCountryLi(r[i]['name'].common, r[i]['flags'].png);
          }
          break;
        case r.length > 10:
          Notiflix.Notify.info(
            'Too many matches found. Please enter a more specific name.'
          );
          break;
        case r.length === 1:
          foundCountry(
            r[0]['name'].common,
            r[0]['flags'].png,
            r[0]['capital'],
            r[0]['population'],
            JSON.stringify(r[0]['languages'])
          );
          Notiflix.Notify.success(
            'Yay, that is the country you were looking for!'
          );
          break;
      }
    })

    .catch(e => {
      console.log(e);
    });
}
