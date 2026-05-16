//=========================1
// function sumTo(n) {
//     if(n <=0) {
//         return 0;
//     }

//     let sum = 0;
//     for(let i = 1; i<=n; i++) {
//         sum +=i;
//     }

//     return sum; 
    
// }

// console.log(sumTo(5));

//=====================2

// function isPrime(n) {
//     if(n<=1) return false;
//     for(let i=2; i*i<=n; i++) {
//         if(n %2==0) {
//             return false;
//         }
//     }
//     return true
// }

// console.log(isPrime(3));

//======================3
// function  reverseStr(str)  {
//     let reversed = "";
//     for(let i=str.length - 1; i >=0 ;  i--){
//         reversed +=str[i];
//     }
//     return reversed;

// }

// console.log(reverseStr("salom"));

//===========================4

// function  countVowels(str) {
//     let count = 0
//     str=str.toLowerCase();
//     for(let char of str) {
//         switch (char) {
//             case 'a':
//             case 'e':
//             case 'i':
//             case 'o':
//             case 'u':
//                 count++;
//                 break;
// }
        
//     }
//     return count;
// }

// console.log(countVowels("Salom"));

//=================5
// function  findMax(arr)  {
//     if(arr.length==0) return null;
//     let max = arr[0];
//     for(let num of arr) {
//         if(num > max) {
//             max=num
//         }
//     }
//     return max
// } 

// console.log(findMax([1, 5, 3]));
