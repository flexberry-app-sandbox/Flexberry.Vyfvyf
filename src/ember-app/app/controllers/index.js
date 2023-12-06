import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.vyfvyf.caption'),
          title: i18n.t('forms.application.sitemap.vyfvyf.title'),
          children: [{
            link: 'i-i-s-vyfvyf-дом-l',
            caption: i18n.t('forms.application.sitemap.vyfvyf.i-i-s-vyfvyf-дом-l.caption'),
            title: i18n.t('forms.application.sitemap.vyfvyf.i-i-s-vyfvyf-дом-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-vyfvyf-класс-l',
            caption: i18n.t('forms.application.sitemap.vyfvyf.i-i-s-vyfvyf-класс-l.caption'),
            title: i18n.t('forms.application.sitemap.vyfvyf.i-i-s-vyfvyf-класс-l.title'),
            icon: 'book',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.new-folder1.caption'),
          title: i18n.t('forms.application.sitemap.new-folder1.title'),
          children: [{
            link: 'i-i-s-vyfvyf-дом-l',
            caption: i18n.t('forms.application.sitemap.new-folder1.i-i-s-vyfvyf-дом-l.caption'),
            title: i18n.t('forms.application.sitemap.new-folder1.i-i-s-vyfvyf-дом-l.title'),
            children: null
          }, {
            link: 'i-i-s-vyfvyf-класс-l',
            caption: i18n.t('forms.application.sitemap.new-folder1.i-i-s-vyfvyf-класс-l.caption'),
            title: i18n.t('forms.application.sitemap.new-folder1.i-i-s-vyfvyf-класс-l.title'),
            icon: 'calendar',
            children: null
          }]
        }
      ]
    };
  }),
})