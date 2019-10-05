const { assert } = require('chai');
const { mumbling } = require('../src/mumbling');

describe('Let the cat mumbling my voice...', () => {
  it('One Letter.', () => {
    assert.equal(mumbling('A'), 'A', 'The mumbling isn\'t as expected.');
  });
  it('Two Letters.', () => {
    assert.equal(mumbling('Ab'), 'A-Bb', 'The mumbling isn\'t as expected.');
  });
});


