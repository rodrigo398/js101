const maxSubArray = nums => {
  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
    result = Math.max(result, nums[i]);
  }

  return result;
};

const isIsogram = string => {
  const result = string
    .split('')
    .map(char => char.toLowerCase())
    .join('');
  const newString = new Set(result);

  return newString.size == result.length;
};

const shortest = string =>
  Math.min(...string.split(' ').map(word => word.length));

const highAndLow = nums => {
  const result = nums.split(' ').map(n => Number(n));
  return `${Math.min(...result)} - ${Math.max(...result)} `;
};

const generate = (min, max, step) => {
  let result = [];

  for (let i = min; i <= max; i += step) {
    result.push(i);
  }
  return result;
};

const songDecoder = string => string.replace(/(WUB)+/g, ' ').trim();

const twoSum = (nums, target) => {
  const result = {};

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];

    if (result[target - n] != null) {
      return [result[target - n], i];
    }

    result[n] = i;
  }
};

//const isSquare = n => Number.isInteger(Math.sqrt(n));

//maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

//console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

//isValid("(]");

//console.log(isIsogram('tesing'));

//shortest('turns out random test cases are easier than writing out basic ones');
/* console.log(
  shortest(
    'turns out an random test cases are easier than writing out basic ones'
  )
); */

//highAndLow('7 6 7 -11 29 872')
//console.log(highAndLow('7 6 7 -11 29 872'));

//isSquare(25)
//console.log(isSquare(812));

//generate(2,10,2)
//console.log(generate(2, 10, 2));

//songDecoder('WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB')
//console.log(songDecoder('WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB'));

//singleNumber([8,2,2,1])
//console.log(singleNumber([8, 2, 2, 1]));

//twoSum([22, 4, 2, 15, 7], 9)
//console.log(twoSum([22, 4, 2, 15, 7], 9));

//reverseInteger(-23490)
