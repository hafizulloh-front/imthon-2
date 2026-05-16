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

//=========================6

// let talabalar = [
//     {
//         id: 1,
//         name: "Ali",
//         age: 16,
//         score: 85
//         }
        
// ]

// function yangiTalabaQosh(talaba) {
//     const id=talabalar.length ? talabalar[talabalar.length - 1].id +1:1;
//     talaba.id=id;
//     talabalar.push(talaba);
//     console.log("yangi talaba qoshildi:", talaba);
    
// }

// function talabalarniKor() {
//     console.log("hozirgi talabalar:");
//     console.log(talabalar);
    
// }

// function talabaniYangila(id, yangilanganMalumot) {
//     let talaba=talabalar.find(t => t.id==id);
//     if(talaba) {        
//         Object,assign(talaba, yangilanganMalumot);
//         console.log("talaba yangilandi:", talaba);   
//     }else {
//         console.log("talaba topilmadi");   
//     }
// }

// function talabaOchir(id) {
//     let index = talabalar.findIndex(t=>t.id==id);
//     if (index!==-1) {
//         let ochirilgan=talabalar.splice(index,1);
//         console.log('talaba ochirildi:', ochirilgan[0]);   
//     }else{
//         console.log("talaba topilmadi");
        
//     }
// }

// yangiTalabaQosh({ism:"husan", yosh:19, baho:91});

//===========================7

// let talabalar = [
//     { id: 1, name: "Ali", age: 16, score: 85 },
//     { id: 2, name: "Vali", age: 17, score: 90 }
// ];

// function createStudent(name, age, score) {
//     if (!name || name.trim() === "") return "Invalid name"; 
//     if (age < 5) return "Invalid age"; 
//     if (score < 0 || score > 100) return "Invalid score"; 

//     const id = talabalar.length ? talabalar[talabalar.length - 1].id + 1 : 1;
//     const newStudent = { id, name, age, score };
//     talabalar.push(newStudent);
//     return newStudent;
// }

// console.log(createStudent("Hasan", 18, 92)); 


