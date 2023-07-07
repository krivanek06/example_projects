function isPalindrome(x: number): boolean {
  if(x < 0){
    return false;
  }

  const casted = String(x);
  for(let i = 0; i < casted.length / 2; i++){
    if(casted[i] !== casted[casted.length - i - 1]){
      return false;
    }
  }

  return true;
};


console.log(isPalindrome(11))
console.log(isPalindrome(202))
console.log(isPalindrome(-11))
console.log(isPalindrome(16))
