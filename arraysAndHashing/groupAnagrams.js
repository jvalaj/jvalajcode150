let word = "pants"

let newWord = word.split('').sort().join('')

console.log(newWord)


const groupAnagrams = (strs) => {
    let dict1 = {};

    for (let word of strs){

        let key = word.split('').sort().join('');

        if (!dict1[key]){
            dict1[key]=[];
        }
        dict1[key].push(word)
    }
    return Object.values(dict1);
}