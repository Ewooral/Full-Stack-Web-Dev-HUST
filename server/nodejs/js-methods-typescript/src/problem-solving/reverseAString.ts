// Write a function in typescript that reverses a string.
// Example: reverseStr("hello") => "olleh"
// 

// METHOD 1 BRUTEFORCE APPROACH
function reverseStr(str: string): string {
    // Add the 'es2020' library to the 'lib' compiler option
    // in the tsconfig.json file to enable the use of BigInt
    if(str.length < 2){
        return "This is not a string, but a character."
    }
    if(!str){
        return "There is no string"
    }
    if(typeof str !== "string"){
        return "This is not a string"
    }
   

    type StackType = string[]

    let Stack: StackType = []
    for(let i = str.length - 1; i >= 0; i--){
        let  currenLetter = str[i]
        Stack.push(currenLetter)   
    }
    console.log("REPEAT::", str.repeat(5))
    console.log(str.split(""))
    return "The reversed string is: " + Stack.join("")
}

// console.log(reverseStr("a")) // "This is not a string, but a character."

// METHOD 2 TWO POINTER APPROACH
const reverseStringTwoPointerApproach = (str: string): string => {
    let [leftIdx, rightIdx, newStr] = [0, str.length - 1, str.split("")];
    while(leftIdx < rightIdx){
        swap(newStr, leftIdx, rightIdx)
        leftIdx++
        rightIdx--
    } 
    return "This is the two pointer approach: " + newStr.join("");
}

function swap(strArr: string[], curIdx: number, lastIdx: number): void{
    let temp = strArr[curIdx]
    strArr[curIdx] = strArr[lastIdx]
    strArr[lastIdx] = temp
}

// METHOD 3 RECURSIVE APPROACH
function reverseStringRecursive(str: string): string{
    if(str === ""){
        return ""
    } else {
        return reverseStringRecursive(str.substr(1)) + str.charAt(0)
    }
}

console.log(reverseStr("hello")) // "olleh"

console.log(reverseStringTwoPointerApproach("Shirty"))

console.log(reverseStringRecursive("Shirty")) // "ytrihs"