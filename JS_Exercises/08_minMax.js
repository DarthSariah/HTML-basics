function minMax(nums) {
  let object = {
    min: nums[0],
    max: nums[0],
  };

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < object.min) {
      object.min = nums[i];
    }
    if (nums[i] > object.max) {
      object.max = nums[i];
    }
  }
  return object;
}

console.log(minMax([-5, 1, 2, 3, 4, 5])); // {min: 1, max: 5}
console.log(minMax([23, 2, 5, 47, 6])); // {min: 2, max: 47}
