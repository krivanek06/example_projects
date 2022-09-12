function longestPalindrome(s: string): string {
  function isPalindrom(s: string): boolean {
    const lowerIndex = Math.floor(s.length / 2)
    const upperIndex = Math.ceil(s.length / 2)

    return s.slice(0, lowerIndex) === s.slice(upperIndex, s.length).split('').reverse().join('');
  }

  let result = '';

  // while didn't reach the end
  for (let i = 0; i < s.length; i++) {
    let temporaryResult = s[i];
    let leftIndex = i - 1;
    let rightIndex = i + 1;
    while (leftIndex >= 0 || rightIndex <= s.length - 1) {
      // polindrom both sides
      if (s[leftIndex] === s[rightIndex]) {
        temporaryResult = s[leftIndex] + temporaryResult + s[rightIndex];
        leftIndex -= 1;
        rightIndex += 1;
      }
      // palindrom on left side
      else if (s[leftIndex] === temporaryResult[temporaryResult.length - 1]) {
        if (isPalindrom(s[leftIndex] + temporaryResult)) {
          temporaryResult = s[leftIndex] + temporaryResult;
          leftIndex -= 1;
        } else {
          break;
        }
      }
      // palindrom on right side
      else if (s[rightIndex] === temporaryResult[0]) {
        if (isPalindrom(temporaryResult + s[rightIndex])) {
          temporaryResult = temporaryResult + s[rightIndex];
          rightIndex += 1;
        } else {
          break;
        }
      } else {
        // no polidrom
        break;
      }
    }

    // check if longer than result
    if (temporaryResult.length > result.length) {
      result = temporaryResult;
    }
  }


  return result;

};

console.log(longestPalindrome('babad'));
console.log(longestPalindrome('cbbd'))
console.log(longestPalindrome('bb'))
console.log(longestPalindrome("aacabdkacaa")) // "aca"
console.log()

const aa = 'abcde'
console.log(aa.slice(0, aa.length / 2))
console.log(aa.slice(Math.ceil(aa.length / 2), aa.length))
