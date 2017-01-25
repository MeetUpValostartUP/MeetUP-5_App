import DS from 'ember-data';

const {
  Model,
  attr,
  belongsTo
} = DS;

export default Model.extend({
  title: attr('string'),
  autor: belongsTo('user', { async: true, autoSave: true })
});
