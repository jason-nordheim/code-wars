String.prototype.toJadenCase = function () {
  const words = this.split(" ");
  let output = "";
  for (let i = 0; i < words.length; i++) {
    const firstLetter = words[i].slice(0, 1);
    const capatlized = capatalize(firstLetter);
    output += `${capatlized}${words[i].slice(1, words[i].length + 1)}`;
    if (i !== words.length - 1) {
      output += " ";
    }
  }
  return output;
};

function capatalize(letter) {
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const index = lowercase.indexOf(letter);
  // letter already upcase
  if (index === -1) return letter;
  // capatalize
  else return uppercase.slice(index, index + 1);
}

/**
 * Tests 
 */
test("Is a function", () => {
  expect(typeof String.prototype.toJadenCase).toBe("function");
});

test('Capatalizes Sentences Properly', () => {
  const input = "The quick brown fox jumps over the lazy sheep dog"
  const expectedOutput = "The Quick Brown Fox Jumps Over The Lazy Sheep Dog"
  expect(input.toJadenCase()).toBe(expectedOutput)
})