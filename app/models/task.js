import DS from 'ember-data';

const {
  Model,
  attr,
  belongsTo
} = DS;

export default Model.extend({
  title: attr('string'),
  created: attr('date'),
  deadline: attr('date'),
  comment: attr('string'),
  autor: belongsTo('user', { async: true, autoSave: true })
});
