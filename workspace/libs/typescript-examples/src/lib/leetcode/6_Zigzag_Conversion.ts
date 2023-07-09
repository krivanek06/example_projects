function convert(s: string, numRows: number): string {
  function create2dArray(s: string, numRows: number): string[][] {
    const array = Array.from(Array(numRows), () => new Array())as string[][];

    // map data to array
    for(let i = 0; i < s.length; i++){
      const index = i % numRows;
      array[index].push(s[i])
    }

    return array;
  }

  const mapArray = create2dArray(s, numRows);
  console.log(mapArray)

  return '';
};

// const test = Array.from(Array(3), () => new Array())
// console.log(test)
// test[0].push('aaa')
// console.log(test)
console.log(convert('PAYPALISHIRING', 3)) // PAHNAPLSIIGYIR
//console.log(convert('PAYPALISHIRING', 4)) // PINALSIGYAHRPI
