import Ember from 'ember';

export default Ember.Component.extend({
  byKeyword: '',
  tasks_filtered: Ember.computed('tasks', 'byKeyword', function() {
    var keyword = this.get('byKeyword');
    var filtered = this.get('tasks');
    if (keyword.length > 0) {
      keyword = keyword.toLowerCase().trim();
      filtered = this.get('tasks').filter((item) => item.get('title').toLowerCase().includes(keyword));
    }
    return filtered;
    }),
  todosSortingDesc: ['deadline:desc'],
  sortedTasks: Ember.computed.sort('tasks_filtered', 'todosSortingDesc'),
  actions: {
    sortDir(dir) {
        console.log(dir);
        this.set('todosSortingDesc', ['deadline:'+ dir +'']);
    }
  }
});
