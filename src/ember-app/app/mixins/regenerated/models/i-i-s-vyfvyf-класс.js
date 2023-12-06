import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  ладно: DS.attr('number'),
  дом: DS.belongsTo('i-i-s-vyfvyf-дом', { inverse: null, async: false })
});

export let ValidationRules = {
  ладно: {
    descriptionKey: 'models.i-i-s-vyfvyf-класс.validations.ладно.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  дом: {
    descriptionKey: 'models.i-i-s-vyfvyf-класс.validations.дом.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КлассE', 'i-i-s-vyfvyf-класс', {
    ладно: attr('Ладно', { index: 0 }),
    дом: belongsTo('i-i-s-vyfvyf-дом', 'Дом', {
      номер: attr('Номер', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'номер' })
  });

  modelClass.defineProjection('КлассL', 'i-i-s-vyfvyf-класс', {
    ладно: attr('Ладно', { index: 0 }),
    дом: belongsTo('i-i-s-vyfvyf-дом', 'Номер', {
      номер: attr('Номер', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
