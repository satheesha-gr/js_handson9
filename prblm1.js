// Problem: You are given a string (STR) of length N, consisting of only the lower case English alphabet. Your task is to remove all the duplicate occurrences of characters in the string.

// Input : abcadeecfb

// Output : abcdef

function result(str) {
    let set = new Set(str);
    let newstr = [...set].join("");
    console.log(newstr);
}
result("abcadeecfb");

// Problem : You are given a string (STR) of length N, you have to print the count of all alphabet.(using maps)

// Input : abcadeecfb

// Output :
// a=2
// b=2
// c=2
// d=1
// e=2
// f=1

function countAlphabet(str1) {
    let count = 0;
    let map1 = new Map();
    for (let i = 0; i < str1.length; i++) {
      if (map1.has(str1[i])) {
        map1.set(str1[i], count + 1);
      } 
      else {
        map1.set(str1[i], 1);
        count = map1.has(str1[i]);
      }
    }
    for (let [key, value] of map1.entries()) {
        console.log(`${key}=${value}`);
    }
}
countAlphabet("abcadeecfb");