import Ember from 'ember';

export default Ember.Controller.extend({
  /*total_boards: Ember.computed('model.@eac.boards', function() {
    return this.get('model').reduce(function(prev, row) {
      return prev + parseFloat(row.get('boards'))
    }, 0)
  })*/
  // boards: Ember.computed.mapBy('model', 'boards'),
  // total_boards: Ember.computed.sum('boards'),
  // max_boards: Ember.computed.max('boards'),
  //
  // boardfeets: Ember.computed.mapBy('model', 'boardsfeet'),
  // total_boardsfeet: Ember.computed.sum('boardfeets'),
  // max_boardfeet: Ember.computed.max('boardfeets')
});
