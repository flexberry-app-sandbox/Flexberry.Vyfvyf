import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-vyfvyf-дом-l');
  this.route('i-i-s-vyfvyf-дом-e',
  { path: 'i-i-s-vyfvyf-дом-e/:id' });
  this.route('i-i-s-vyfvyf-дом-e.new',
  { path: 'i-i-s-vyfvyf-дом-e/new' });
  this.route('i-i-s-vyfvyf-класс-l');
  this.route('i-i-s-vyfvyf-класс-e',
  { path: 'i-i-s-vyfvyf-класс-e/:id' });
  this.route('i-i-s-vyfvyf-класс-e.new',
  { path: 'i-i-s-vyfvyf-класс-e/new' });
});

export default Router;
