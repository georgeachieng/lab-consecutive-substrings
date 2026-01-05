/**
 * Generate all consecutive substrings of a given string.
 * Consecutive means characters must be adjacent.
 * Example: "abc" -> ["a","ab","abc","b","bc","c"]
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(n^2)
 *
 * @param {string} string - input string
 * @returns {string[]} - array of consecutive substrings
 */
function consecutiveSubstrings(string) {
  const result = [];
  const n = string.length;

  // Outer loop: choose starting index
  for (let i = 0; i < n; i++) {
    // Inner loop: choose ending index
    for (let j = i + 1; j <= n; j++) {
      // substring(i, j) gives consecutive slice from i up to j-1
      result.push(string.substring(i, j));
    }
  }

  return result;
}

if (require.main === module) {
  // ✅ Custom tests
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));

  console.log("");

  console.log("Expecting: []");
  console.log("=>", consecutiveSubstrings(''));

  console.log("");

  console.log("Expecting: ['p','ph','pho','phon','phone','h','ho','hon','hone','o','on','one','n','ne','e']");
  console.log("=>", consecutiveSubstrings('phone'));
}

module.exports = consecutiveSubstrings;