//Reverse the string

function reverseString(str){
    return str.split('').reverse().join('');
    }
    console.log(reverseString('join'));

// reverse a string
let name1="rishabh";
let len=name1.length;
let reverse="";
for(let i=len;i>=0;i--){
    reverse=reverse+name1.charAt(i);
}
console.log(reverse);

//count vowel
let count=0;
function countVowels(str3){
    for(let i=0;i<str3.length;i++){
        if(str3.charAt(i)==='a' || str3.charAt(i)==='e' || str3.charAt(i)==='i' || str3.charAt(i)==='o' || str3.charAt(i)==='u'){
            count++;
        }
    }
    return count;
}
console.log(countVowels('aeiou'));

//check weather String is Palendrom or not
let newString="";
function checkPalendrom(str2){
        newString=str2.split('').reverse().join('');
        return newString===str2;
}
console.log(checkPalendrom('noon'));

//check Palindrom using for loop 
function Palindrom(str1){
    const  len=str1.length;
    for(let i=0;i<len/2;i++){
        if(str1[i]!==str1[len-i-1]){
            return "it is not a palendrom";
        }
       

    }
return "it is palindrom";

}
console.log(Palindrom('madam'));

//check  anagram in string means both string hava same character or not


function checkAnagram(string2,string3){
   
    return string3.split('').sort().join()===string2.split('').sort().join();
    
}    
console.log(checkAnagram('listen','silent'));


//remove duplicate from String 

function removeDuplicate(mystr){
    let uniqeString="";
    for(let ch of mystr){
        if(uniqeString.includes(ch)==false){

              uniqeString+=ch;
        }
    }
    return uniqeString;
}
console.log(removeDuplicate('rishabh'));//rishab

//string compression

function compressionString(str4){
    let count=1;
    
let compressedString='';
    for(let i=0;i<str4.length;i++){
        if(str4[i]==str4[ i+1]){
            count++;
        }
        else{
            compressedString+=count+str4[i];
            count=1;
        }
    }

    return compressedString;
}
console.log(compressionString('hello'));

