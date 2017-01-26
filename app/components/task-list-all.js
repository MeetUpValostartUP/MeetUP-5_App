import Ember from 'ember';

export default Ember.Component.extend({
  byKeyword: '',
  byUserName: '',
  tasks_filtered: Ember.computed('tasks', 'byKeyword', 'byUserName', function() {
    var keyword = this.get('byKeyword').toLowerCase(),
      userName = this.get('byUserName'),
      filtered = this.get('tasks');
    console.log(userName);
    keyword = keyword.toLowerCase().trim();
    if (userName.length > 0) {
      filtered = this.get('tasks').filter((item) => item.get('title').toLowerCase().includes(keyword)
                                                 && item.get('autor.name') === userName);
    } else {
      filtered = this.get('tasks').filter((item) => item.get('title').toLowerCase().includes(keyword));
    }
    return filtered;
  }),
  todosSortingDesc: ['deadline:desc'],
  sortedTasks: Ember.computed.sort('tasks_filtered', 'todosSortingDesc'),
  actions: {
    sortDir(dir) {
      console.log(dir);
      this.set('todosSortingDesc', ['deadline:' + dir + '']);
    },
    userSelect(user) {
      this.set('byUserName', user);
    }
  }
});
