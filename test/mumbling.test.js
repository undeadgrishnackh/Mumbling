const { mumbling } = require('../src/mumbling');

describe('Let the cat mumbling my voice...', () => {
  it('One Letter.', () => {
    expect(mumbling('A')).toEqual('A');
  });
  it('Two Letters.', () => {
    expect(mumbling('Ab')).toEqual('A-Bb');
  });
  it('Three Letters.', () => {
    expect(mumbling('Zpg')).toEqual('Z-Pp-Ggg');
  });
  it('Complex Wording.', () => {
    expect(mumbling('ZpglnRxqenU')).toEqual('Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu');
    expect(mumbling('NyffsGeyylB')).toEqual('N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb');
    expect(mumbling('MjtkuBovqrU')).toEqual('M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu');
    expect(mumbling('EvidjUnokmM')).toEqual('E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm');
    expect(mumbling('HbideVbxncC')).toEqual('H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc');
  });
});