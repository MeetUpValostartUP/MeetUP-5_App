import Ember from 'ember';

export function dateFormat(params) {
  var getDate = params[0],
        clearDate = new Date(Date.parse(getDate)).toString().replace('GMT+0200 (EET)', '');
  return clearDate;
}

export default Ember.Helper.helper(dateFormat);
