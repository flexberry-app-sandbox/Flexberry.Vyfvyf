import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISVyfvyfДомLForm from './forms/i-i-s-vyfvyf-дом-l';
import IISVyfvyfКлассLForm from './forms/i-i-s-vyfvyf-класс-l';
import IISVyfvyfДомEForm from './forms/i-i-s-vyfvyf-дом-e';
import IISVyfvyfКлассEForm from './forms/i-i-s-vyfvyf-класс-e';
import IISVyfvyfДомModel from './models/i-i-s-vyfvyf-дом';
import IISVyfvyfКлассModel from './models/i-i-s-vyfvyf-класс';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-vyfvyf-дом': IISVyfvyfДомModel,
    'i-i-s-vyfvyf-класс': IISVyfvyfКлассModel
  },

  'application-name': 'Vyfvyf',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Vyfvyf',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Vyfvyf',
          title: 'Vyfvyf'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        vyfvyf: {
          caption: 'Vyfvyf',
          title: 'Vyfvyf',
          'i-i-s-vyfvyf-дом-l': {
            caption: 'Дом',
            title: ''
          },
          'i-i-s-vyfvyf-класс-l': {
            caption: 'Класс',
            title: ''
          }
        },
        'new-folder1': {
          caption: 'NewFolder1',
          title: 'NewFolder1',
          'i-i-s-vyfvyf-дом-l': {
            caption: 'ДомL',
            title: 'Дом'
          },
          'i-i-s-vyfvyf-класс-l': {
            caption: 'КлассL',
            title: 'Класс'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-vyfvyf-дом-l': IISVyfvyfДомLForm,
    'i-i-s-vyfvyf-класс-l': IISVyfvyfКлассLForm,
    'i-i-s-vyfvyf-дом-e': IISVyfvyfДомEForm,
    'i-i-s-vyfvyf-класс-e': IISVyfvyfКлассEForm
  },

});

export default translations;
