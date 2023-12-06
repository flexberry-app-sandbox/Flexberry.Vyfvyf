import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-vyfvyf-класс', 'Unit | Serializer | i-i-s-vyfvyf-класс', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-vyfvyf-класс',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-vyfvyf-прикол',

    'model:i-i-s-vyfvyf-дом',
    'model:i-i-s-vyfvyf-класс',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
