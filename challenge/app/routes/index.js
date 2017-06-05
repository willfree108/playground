import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('api');
  },
  setupController: function(controller, model) {
    controller.set('model', model);
  }
});
