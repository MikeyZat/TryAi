import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import App from './App';
import common_pl from './translations/pl/common.json';
import common_en from './translations/en/common.json';

const getInitialLng = () => {
  // @ts-ignore IE has userLanguage
  const userLng = localStorage.getItem('lng') || window.navigator.userLanguage || window.navigator.language;
  switch (userLng) {
    case 'en-US':
    case 'en-GB':
    case 'en':
      return 'en';
    case 'pl':
      return 'pl';
    default:
      return 'en';
  }
};

i18next.init({
  interpolation: { escapeValue: false },
  lng: getInitialLng(),
  resources: {
    en: {
      common: common_en,
    },
    pl: {
      common: common_pl,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
