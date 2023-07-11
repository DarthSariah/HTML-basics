function posNegCount(nums) {
  let object = { pos: 0, neg: 0 };
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) {
      object.pos++;
    } else {
      object.neg++;
    }
  }
  return object;
}

console.log(posNegCount([1, -1, 2, -2, 3, 3, 0, 0])); // { pos: 6, neg: 2 }
console.log(posNegCount([3, 1, -5, 0, -2, 2, 0, -9])); // { pos: 5, neg: 3 }
