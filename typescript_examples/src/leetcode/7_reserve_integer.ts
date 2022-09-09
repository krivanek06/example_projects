function reverse(x: number): number {
  const isNegative = x < 0;
  const reversedString = x.toString().split('').reduce((acc, curr) => curr + acc);
  const castedInt = parseInt(reversedString);

  if (castedInt >= Math.pow(2, 31) - 1 || castedInt <= Math.pow(-2, 31)) {
    return 0;
}

  return isNegative ? -castedInt : castedInt;
};


const a = 1534236469;
console.log(reverse(a))
