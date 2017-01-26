import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('tasks-template-all', 'Integration | Component | tasks template all', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{tasks-template-all}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#tasks-template-all}}
      template block text
    {{/tasks-template-all}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
