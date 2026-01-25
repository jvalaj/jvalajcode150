

// intuition is -
/* for each element in the list - check to see if it in the dict
if it is in dict already, return false.
if not, add it

dict[value of elemet] = true / false. (or can be the count)

*/


const containsDuplicate = (nums) => {
    let dict1 = {}

    for (let num of nums){ //also could have written for (let i=0; i< nums.length();i++)
        if (dict1[num]=== 1){
            return true;
        }
        else{
            dict1[num]=1;
        }
    }
    return false

}