const { assert } = require('chai');
const { mumbling } = require('../src/mumbling');

describe('Let the cat mumbling my voice...', () => {
  it('One Letter.', () => {
    assert.equal(mumbling('A'), 'A', 'The mumbling isn\'t as expected.');
  });
  it('Two Letters.', () => {
    assert.equal(mumbling('Ab'), 'A-Bb', 'The mumbling isn\'t as expected.');
  });
  it('Three Letters.', () => {
    assert.equal(mumbling('Zpg'), 'Z-Pp-Ggg', 'The mumbling isn\'t as expected.');
  });
  it('Complex Wording.', () => {
    assert.equal(mumbling('ZpglnRxqenU'), 'Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu', 'The mumbling isn\'t as expected.');
    assert.equal(mumbling('NyffsGeyylB'), 'N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb', 'The mumbling isn\'t as expected.');
    assert.equal(mumbling('MjtkuBovqrU'), 'M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu', 'The mumbling isn\'t as expected.');
    assert.equal(mumbling('EvidjUnokmM'), 'E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm', 'The mumbling isn\'t as expected.');
    assert.equal(mumbling('HbideVbxncC'), 'H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc', 'The mumbling isn\'t as expected.');
  });
});