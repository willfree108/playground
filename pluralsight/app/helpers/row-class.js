import Ember from 'ember';

export function rowClass([ row ]/*, hash*/) {
  let class_names = []
  if (row) {
      if (row.Boards === 0 || row.BoardsSum === 0) {
        class_names.push("zero")
      }
      return class_names.join(' ')
  }
  return ''
}

export default Ember.Helper.helper(rowClass);
