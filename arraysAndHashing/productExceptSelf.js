//medium

/*intution is think of it like this firwst go left to right

multiplying all numbers and storing in res

then go righ to left multiplying the post fix sotring it in res and icnreasing it.

*/
const productExceptSelf = (nums) => {

    let res = []

    for (let i of nums){
        res.push(1)
    }

    let prefix = 1;

    for (let i=0; i<nums.length;i++){
        res[i] = prefix;
        prefix *= nums[i];
    }


    let postfix = 1;

    for(let i= nums.length - 1; i>-1; i--){
        res[i] *= postfix;
        postfix *= nums[i];
    }

    return res

}