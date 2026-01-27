//medium


//strs is gonna be  sometghin like = ["word1","word2"]
const encode = (strs) => {

    let encodedString = ""
    for (let word of strs) {
        encodedString += word.length + "#" + word; 
//here no need to convert the word length into a number 
// since javascript inserts thing as string by default
    }
    return encodedString;
}

// so now we will have string like 4#word5#wordd etcc..

const decode = (str) => {
    //here we will receive a string

    let decodedString = [];
    let i = 0
    
    /*  "5 #  word 4 # "
         i j
         0 1  2345 6
    */
    while (i < str.length){

        let j = i;
        while (str[j]!== '#'){
            j++;
        }

        //main step is ki you need to find 
        // the #. once u have th # y
        // ou will know ki what that number is .. 
        // and then we can traverse utne numbers aage 
        // taaki hume word mil jaaye
        
        let length = parseInt(str.slice(i,j));
        //now we have the length

        let wordToRead = str.slice(j+1,j+1+length);

        decodedString.push(wordToRead);

        i = j + 1 + length;
    }

    return decodedString;

}
//need to return a list of words from decode function