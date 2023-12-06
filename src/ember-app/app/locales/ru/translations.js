import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Vyfvyf',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Vyfvyf',
          title: 'Vyfvyf'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-vyfvyf-дом-l': IISVyfvyfДомLForm,
    'i-i-s-vyfvyf-класс-l': IISVyfvyfКлассLForm,
    'i-i-s-vyfvyf-дом-e': IISVyfvyfДомEForm,
    'i-i-s-vyfvyf-класс-e': IISVyfvyfКлассEForm
  },

});

export default translations;
