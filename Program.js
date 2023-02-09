console.log("----------Odd Numbrs---------------");
const value = [1, 2, 3, 4, 5, 6]
function oddNum(){
    for(let i=0; i<value.length; i++){
        if(value[i]%2 !=0){
            console.log(value[i]);
        }
    }
}

oddNum();

console.log("---------------Title Caps------------------");

const solu = ["raja", "hari", "ram", "suresh"];
function titleCaps (){
    for(let i=0; i<solu.length; i++){
        solu[i] = solu[i].toUpperCase();
        console.log(solu[i]);
    }
}

titleCaps();

console.log("---------------------- Sum of all numbrers in an array-----------------");

const num = [1, 2, 3, 4, 5, 6];
function sumofNum(){
    let solu1 = 0;
    for(let i=0; i<num.length; i++){
        solu1 = solu1+num[i];
    }
    console.log(solu1);
}

sumofNum();

console.log("------------------------Prime number------------------");


    //let flag =true;
function isPrimeNum () {
    const number = [3, 17, 35];
    var number1 = [];
    let flag =true;
   for(let k=0; k<number.length; k++){
     for(let i=2; i<number[k]-1; i++){
        if(number[k] % i == 0){
            flag =false;
            break;
        }
    }
    if(flag == true){
        number1.push(number[k]);
        
    }
    
   }
   console.log(number1);
}
  
isPrimeNum();

console.log("----------------------------Palindrom-----------------------");

const name2 = ["malayalam", 121, 342, "arra"];
var sub = [];
//var sum = name2.split("");
function isPalindrome() {
    for(let k=0; k<name2.length; k++){
        var sum = name2[k].toString().split("");
        for(let i=0; i<sum.length; i++){
            name1 = sum.reverse().join("");
            console.log(name1);
        }
        if(name2[k] == name1){
            sub.push(name1);
        }
        
    }
    console.log(sub);
}


isPalindrome();

console.log("-------------------------median of two sorted array-------------------------");

function sortedArr(){
    var arr1 = [1, 7, 2, 5, 13, 11];
var arr2 = [4, 8, 3, 9, 6];
var numb1 = arr1.sort((a, b)=>a-b);
var numb2 = arr2.sort((a, b)=>a-b);
for(let i=0; i<arr2.length; i++){
    arr1.push(arr2[i]);
} 
console.log(arr1.sort((a, b)=>a-b));
if(arr1.length % 2 == 0){
    var a = arr1.length /2;
    var b = (arr1[a-1]+arr1[a])/ 2
    console.log(b);
}
else{
    var c = arr1.length - arr2.length;
    console.log(arr1[c-1]);
}
}

sortedArr();

console.log("-----------------------------Remove Duplicates------------------------");

var solution = ["apple", "orange", "mango", "apple", "grapes"];

function removeDuplicates(solution) {
    return [...new Set(solution)];
}
  
console.log(removeDuplicates(solution));


console.log("-----------------------------------Odd numbers arrow------------------------");


let groom = () => {
    const value = [1, 2, 3, 4, 5, 6]
    for(let i=0; i<value.length; i++){
        if(value[i]%2 !=0){
            console.log(value[i]);
        }
    }



}

groom();

console.log("-------------------------------Title caps---------------");

let values = () => {
    const solu = ["raja", "hari", "ram", "suresh"];
    for(let i=0; i<solu.length; i++){
        solu[i] = solu[i].toUpperCase();
        console.log(solu[i]);
    }

}

values();

console.log("---------------------------------------sum of all numbers ------------------");

let values1 = () => {
    const num = [1, 2, 3, 4, 5, 6];
    let solu1 = 0;
    for(let i=0; i<num.length; i++){
        solu1 = solu1+num[i];
    }
    console.log(solu1);

}

values1();


console.log("-------------------------------------Prime number-------------------");

let values2 = () => {
        const number = [3, 17, 35];
        var number1 = [];
        let flag =true;
       for(let k=0; k<number.length; k++){
         for(let i=2; i<number[k]-1; i++){
            if(number[k] % i == 0){
                flag =false;
                break;
            }
        }
        if(flag == true){
            number1.push(number[k]);
            
        }
        
       }
       console.log(number1);
    
}

values2();

console.log("-----------------------------Palindrome-------------------------");

let values3 = () => {
    const name2 = ["malayalam", 121, 342, "arra"];
var sub = [];
//var sum = name2.split("");
    for(let k=0; k<name2.length; k++){
        var sum = name2[k].toString().split("");
        for(let i=0; i<sum.length; i++){
            name1 = sum.reverse().join("");
            console.log(name1);
        }
        if(name2[k] == name1){
            sub.push(name1);
        }
        
    }
    console.log(sub);

}

values3();