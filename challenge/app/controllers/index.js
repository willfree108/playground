import Ember from 'ember';

export default Ember.Controller.extend({
  services: Ember.computed.filterBy('model', 'cat', 'services'),
  techniques: Ember.computed.filterBy('model', 'cat', 'techniques')
});
