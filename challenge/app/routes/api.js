export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('api', params.id);
  }
});
