const { assert } = require('chai');
const { mumbling } = require('../src/mumbling');

describe('Let the cat mumbling my voice...', () => {
  it('One Letter.', () => {
    assert.equal(mumbling('a'), 'a', 'The mumbling isn\'t as expected.');
  });
});


