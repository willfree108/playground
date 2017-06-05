import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  description: DS.attr(),
  slug: DS.attr(),
  cat: DS.attr(),
  plan: DS.attr()
});
