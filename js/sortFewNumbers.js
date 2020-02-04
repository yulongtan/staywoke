// Given n numbers, each number is smaller than k, sort them in O(n)

// The idea is to use an auxiliary array of size k, and then use that as a counter
// for the nums in the array. If k = 10 and nums = [3,1,3,9,5],
// then aux =[0,1,0,2,0,1,0,0,0,1]. We can then replace nums where 
// aux[i] > 0 with the index as the value, and using the index value
// for how many numbers there are. aux[3] = 2, so we add 3 twice to nums.
const sortFewNumbers = (nums, k) => {
  // let aux = Array(k).fill(0);
  let aux = [];
  for (let n of nums) {
    // js initializes all values to be undefined so rather than using Array.fill(),
    // bc k can be potentially big, we just set the indices we care about
    if (!aux[n]) {
      aux[n] = 0;
    }
    aux[n]++;

  }
  let index = 0;
  for (let i = 0; i < aux.length; i++) {
    let num = aux[i];
    if (num && num > 0) {
      for (let j = 0; j < num; j++) {
        nums[index] = i;
        index++;
      }
    }
  }
}

module.exports = sortFewNumbers;