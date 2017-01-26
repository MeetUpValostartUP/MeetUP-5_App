import Ember from 'ember';

export default Ember.Component.extend({
    deadline: {
        date: null,
        time: null
    },
    newTask: {
        title: null,
        created: null,
        deadline: null,
        comment: null
    },
    clearTask: {
        title: null,
        created: null,
        deadline: null,
        comment: null
    },
    store: Ember.inject.service(),
    actions: {
      createTask() {
        var creationDate = new Date(),
            deadlineTime = this.get('deadline.time'),
            deadlineDateTime = new Date(Date.parse(new Date(Date.parse(this.get('deadline.date'))).toString().replace("02:00", deadlineTime)));
        this.set('newTask.deadline', deadlineDateTime);
        this.set('newTask.created', creationDate);

        var _store = this.get('store'),
            newTask = this.get('newTask');
        let task = _store.createRecord('task', newTask);
        _store.findRecord('user', this.get('task_id')).then((user) => {
          user.get('tasks').addObject(task);
          user.save();
          task.save();
        });
        this.set('newTask', this.get('clearTask'));
      }
    }
});
