function matchingStrings(strings, queries) {
    let string = strings;
    let query = queries;
    let result = []
    
    query.forEach((e) => {
        let required = e;
        let count = 0;
        let inputCount = []
        
        for (let i = 0; i < string.length; i++) {
            const element = string[i];
            
            if(required.match(element)) {
                count++;
                inputCount.push(count)
            }
        }
        result.push(inputCount.length)
    });

    return result;
}   

let firstString = ['aba', 'baba', 'aba', 'xzxb'];
let firstQuery = ['aba', 'xzxb', 'ab'];
let secondString = ['def', 'de', 'fgh'];
let secondQuery = ['de','lmn','fgh'];
let thirdString = ['abcde', 'sdaklfj', 'asdjf', 'na', 'basdn', 'sdaklfj', 'asdjf', 'na', 'asdjf', 'na', 'basdn', 'sdaklfj', 'asdjf'];
let thirdQuery = ['abcde', 'sdaklfj', 'asdjf', 'na', 'basdn'];

matchingStrings(firstString, firstQuery);
matchingStrings(secondString, secondQuery);
matchingStrings(thirdString, thirdQuery);