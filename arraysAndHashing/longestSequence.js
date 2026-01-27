//medium

/*

class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        numSet = set(nums)
        longest = 0

        for n in numSet:
            # check if its the start of a sequence
            if (n - 1) not in numSet:
                length = 1
                while (n + length) in numSet:
                    length += 1
                longest = max(length, longest)
        return longest


use a set - that is very important because we need to check a lot of numbers exist in arr or not

okay so our intuition basically is that a sequence is any number - 1 exists then
that number is not the first number

if any number after that number exists then we keep going, adding the length (which we
dynamically update) to our inital number and see how long can we go
*/


const longestConsecutiveSequence = (nums) => {

    let numSet = new Set(nums);
    let longest = 0;

    for (let num of numSet){
        if (numSet.has(num-1) === false){ // if num - 1 is not in numset, num is 1st of sequence
            
            let length = 1
            let current = num

            while (numSet.has(current+1)){
                length+=1;
                current+=1
                
            }
            longest = Math.max(longest,length)
        }
    }

    return longest

}

