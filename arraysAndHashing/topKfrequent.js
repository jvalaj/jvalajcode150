//medium

/*

//input = [1,1,1,1,1,2,2,2,3,4,4,4,4,5,5]
1 is 5 times
2 is 3 times
3 is 1 time
4 is 4 times
5 is 2 times
num, freq 


class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        dict1 = {}

        for i in range(len(nums)):
            if nums[i] in dict1:
                dict1[nums[i]] +=1
            else:
                dict1[nums[i]] = 1 this means that our dictrionary is like {num:freq, num2:freq2, ..}
        
        #hashmap created. now we need to sort this in another order of ascedning

        bucket = [ [] for _ in range(len(nums) + 1)]

        for num,freq in dict1.items(): //[ [],[],[]  ] 
            bucket[freq].append(num)

        #added the elements in order of their frequencies as the index. now we just need to pull out the top k elements from the bucket
        res = []
        for i in range(len(nums), 0 , -1):
            for x in bucket[i]:
                res.append(x)
                if len(res) == k:
                    return res
                
        return res

*/


var topKFrequent = function(nums, k) {
    let dict1= {}
    for (let num of nums){ //added all numbers in hashmap by num:freq
        if (dict1[num]){
            dict1[num]++;
        }
        else {dict1[num]=1}
    }

    let bucket = []
    for (let i=0; i < nums.length+1 ; i++){
        bucket.push([]);
    }

    //create empty bucket [ [], [], [], [] .. till length of nums ]
    //now adding the required number at the 
    // index of it's frequency so the bigger the fequency 
    // the number will be towards end of bucket..

    for (let a in dict1) {
        let freq = dict1[a];
        bucket[freq].push(Number(a));
    }
    
    let res = []
    for (let i=bucket.length - 1; i>=0;i--){
        for (let x of bucket[i]){
            res.push(x);
            if (res.length === k){
                return res;
            }
        }
    }
    return res;
};