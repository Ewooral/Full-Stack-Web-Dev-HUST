/**
 * 1. Two Sum
Solved
Easy
Topics
Companies
Hint

Given an array of integers nums and an integer target, return indices of the two 
numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not 
use the same element twice.
You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

 

Constraints:

    2 <= nums.length <= 104
    -109 <= nums[i] <= 109
    -109 <= target <= 109
    Only one valid answer exists.

 
Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
 */

// METHOD 1: BRUTE FORCE
function twoSumBruteforceApproach(nums: number[], target: number): number[]{
    if(nums.length < 2 || nums.length > 104 || target < -109 || target > 109){
        return []
    }
    for(let i = 0; i < nums.length; i++){
        let curNum = nums[i]
        if(curNum < -109 || curNum > 109){
            return []
        }
        for(let j=0; j < nums.length; j++){          
            let nextNum = nums[j]
            if(i === j){
                continue
            }
            if(curNum + nextNum === target){
                return [i, j]
            }
        }
    }
    return []
}


// METHOD 2: HASH MAP
function twoSumHashMapApproach(nums: number[], target: number): number[]{
    if(nums.length < 2 || nums.length > 104 || target < -109 || target > 109){
        return []
    }
    let map = new Map<number, number>()
    for(let i = 0; i < nums.length; i++){
        if(nums[i] < -109 || nums[i] > 109){
            return []
        }
        let complement = target - nums[i]
        if(map.has(complement)){
            return [map.get(complement), i] as number[]
        }
        map.set(nums[i], i)
    }
    return []
}

console.log(twoSumBruteforceApproach([2,7,11,15], 9)) // [0, 1]
console.log(twoSumBruteforceApproach([1, -2, 1, 2, 4 ], 0))
console.log(twoSumBruteforceApproach([3, 2, 4], 6))
console.log(twoSumBruteforceApproach([3, 3], 6))
console.log(twoSumBruteforceApproach([0, 0, 1, 2], 6))
console.log(twoSumBruteforceApproach([300, 200, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400], 2000))

// console.log(twoSumHashMapApproach([2,7,11,15], 9)) // [0, 1]
// console.log(twoSumHashMapApproach([1, -2, 1, 2, 4 ], 0))
console.log(twoSumHashMapApproach([3, 2, 4], 6))
console.log(twoSumHashMapApproach([3, 3], 6))
console.log(twoSumHashMapApproach([0, 0, 1, 2], 6))
console.log(twoSumHashMapApproach([300, 200, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400], 2000))