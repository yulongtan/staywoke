let findDuplicates = (nums) => {
  let dupes = [];
  let uniques = [];
  nums.forEach((num) => {
    if (uniques.indexOf(num) == -1) {
      uniques.push(num);
    } else {
      dupes.push(num);
    }
  });
  return dupes;
};