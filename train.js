console.log("TRAIN AREA!");

// C-TASK
console.log("C-TASK");
const moment = require("moment");
class Shop {
    time = moment().format("HH:mm");
    non = 0;
    lagmon = 0;
    cola = 0;

    constructor(non, lagmon, cola) {
        this.non = non;
        this.lagmon = lagmon;
        this.cola = cola;
    }

    qoldiq() {
        console.log(`Hozir ${this.time}da ${this.non}ta non, ${this.lagmon}ta lagmon, ${this.cola}ta cola mavjud.`);
    }

    sotish(string, n) {
        if(string === "non") {
            this.non -= n;
        }else if(string === "lag'mon" || string === "lagmon"){
            this.lagmon -= n;
        }else if(string === "cola"){
            this.cola -= n;
        }else {
            console.log("Iltimos mahsulot nomini to'g'ri kiriting.");
        }
    }

    qabul(string, n) {
        if(string === "non") {
            this.non += n;
        }else if(string === "lag'mon" || string === "lagmon"){
            this.lagmon += n;
        }else if(string === "cola"){
            this.cola += n;
        }else {
            console.log("Iltimos mahsulot nomini to'g'ri kiriting.");
        }
    }

}

const shop = new Shop(4, 5, 2);
shop.qoldiq();

console.log("***********************************************");

shop.sotish("non", 3);
shop.qabul("cola", 4);
shop.qoldiq();














// // A-Task
// console.log("A-Task");

// // Harf sifatida kiritilgan birinchi parametr, 
// // kiritilgan ikkinchi parametr tarkibida nechta ekanligini qaytaruvchi
// // Funktsiya tuzing

// // Masalan: countLetter("e", "engineer")
// // 'engineer' so'zi tarkibida 'e' harfi 3 marotaba takrorlanganligi uchun
// // 3 sonini qaytaradi

// function countLetter(letter, text) {
//     let count = 0;

//     if(typeof text !== 'string'){
//         console.log("Please enter String format text.");
//     } else {
//         let arr1 = [];
//         arr1 = text.split("");
//         const size = arr1.length;
//         for(let i = 0; i <= size; i++){
//             if(letter == arr1[i]) {
//                 count++;
//             }
//         }
//         console.log(`"${text}" so'zida "${letter}" harifi ${count} marotaba takrorlandi.`);
//         console.log("Natija: ", count);
//     }
// }
// countLetter("e", "engineer");

// B-Task
// function countDigits(text){
//     let count = 0;
//     if(typeof text !== "string"){
//         console.log("Please enter the String");
//         return;
//     } else {
//         let arr = [];
//         arr = text.split('');
//         for(let i = 0; i < arr.length; i++){
//             if(arr[i] >= 0 && arr[i] <= 9){
//                 count++;
//             }
//         }
//     }
//     console.log(`Yuqoridagi string tarkibida ${count} dona raqam qatnashganligi uchun, natija: ${count}`);
// }

// countDigits("ad2a54y79wet0sfgb9");