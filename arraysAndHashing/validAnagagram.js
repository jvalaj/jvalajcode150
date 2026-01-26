

//easy

// .sort() time complexity is O(nlogn)

const validAnagram = (s,t) => {
    let sortedS = s.split('').sort().join('')
    let sortedT = t.split('').sort().join('');

    return sortedS === sortedT ? true : false;
}