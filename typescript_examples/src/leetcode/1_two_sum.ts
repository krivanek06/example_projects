function twoSum(nums: number[], target: number): number[] {
  // hashmap of {number: position}
  const numberPositionHapMap = nums.reduce((acc, curr, index) => {
    // side effect -> same number
    if(curr in acc && curr + curr === target){
      const previousIndex = acc[curr];
      return {...acc, ['match']: [previousIndex, index]}
    }
    return {...acc, [curr]: index};
  }, {})

  // found 2 same elements which equals to target
  if('match' in numberPositionHapMap){
    return numberPositionHapMap['match'];
  }

  for(let i = 0; i < nums.length; i++){
    const remainingValue = target - nums[i];
    // remaining value in hashmap and its not the same index => return its index
    if(numberPositionHapMap[remainingValue] && numberPositionHapMap[remainingValue]  !== i){
      return [i, numberPositionHapMap[remainingValue]]
    }
  }

  return [];
};


console.log(twoSum([3,2,4], 6))
console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3,3], 6))
console.log(twoSum([1,3,4,2], 6  ))
