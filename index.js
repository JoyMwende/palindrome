let array = [];
let word="riscor";
function reverse(string){
    for(let p=string.length-1; p>=0; p--){
      array.push(string[p]);

    }
    return array.join("");
}
console.log(reverse(word));

if (array.join("") == word) {
    console.log("This is a palindrome");
}
else{
    console.log("This is not a palindrome");
}