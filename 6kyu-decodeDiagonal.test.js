const {decodeDiagonal} = require('./6kyu-decodeDiagonal') 

test('grid maps to correct string', () => {
    let grid_1 = ( 
        "C \n" +
        "D o F C A E A s ! \n" +
        "G H d E L A r \n" +
        "L M N e P a F \n" +
        "X Z R P W"
        );
    expect(decodeDiagonal(grid)).toBe("CodeWars")
})



// Test.describe('single letter', function() {
//   var grid = 'I';
//   var results = getDiagonalCode(grid);
//   Test.it('should return only a single letter', function() {
//     Test.assertEquals(results, 'I');
//   });
// });

// Test.describe("Random Grid", function() {
//   var grid = (
// "q z J H M z D v H B H A E D G x s C C t H K w y s G K I q L t K D E J w L \n" +
// "K p v r v z C y K M o p D y o y r n \n" +
// "M E w B C p F n M s M J E s u A r J G F L v t r F B H E E D y E x A z F L q s r"
// ); // note nothing on the middle line so parsing should end.
//   var results = getDiagonalCode(grid);
//   Test.it('should return qpwrMzFyHMMpEyuysnG', function() {
//     Test.assertEquals(results, 'qpwrMzFyHMMpEyuysnG');
//   });

// });

// Test.describe("Random Grid", function() {
//   var grid = (
// "B p E D y o q F q n C H v x K K D \n" +
// "C r I y o w A n y F t B B q J C u B t z I A F I \n" +
// "F H u s s y H I D n B \n" +
// "L o J u F D F J A I s G s u o x E v \n" +
// "L r x G J K y x o I E n w G H J M M z w F M r G \n" +
// "K"
// ); // note: nothing on the bottom line, so parsing should end
//   var results = getDiagonalCode(grid);
//   Test.it('should return BruuJ', function() {
//     Test.assertEquals(results, 'BruuJ');
//   });

// });

