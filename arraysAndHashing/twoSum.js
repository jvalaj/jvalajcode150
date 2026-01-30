//easy

/*
intuition
1 make empty object/dict
2 think about does the target i current number exist inn our obj
3 if it does, return the index of current and that difference
4 if it does not add CURRENT NUMBER to dict as key (number) : value (index in nums)
the 4 point is very important - it needs to be flipped
*/

const twoSum = (nums, target) => {
    
    let object1 = {};
    
    for(let i=0;i<nums.length;i++){
        let difference = target - nums[i];
        if (difference in object1){
            return [object1[difference], i]
        }

        object1[nums[i]] = i // remember this is very important
    }

}