import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | simply-gluten-free', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:simply-gluten-free');
    assert.ok(route);
  });
});
