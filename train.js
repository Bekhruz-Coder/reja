// console.log("Jack Ma maslahatlari!");
// const list = [
//     "yaxshi talaba bo'ling", // 0~20
//     "to'g'ri boshliq tanglang va ko'roq xato qiling", // 20~30
//     "o'zingizga ishlashingizni boshlang", // 30~40
//     "siz kuchli bo'lgan narsalarni qiling", // 40~50
//     "yoshlarga investitsiya qiling", // 50~60
//     "endi dam oling, foydasi yoq endi" // 60~
// ];

// function maslahatBering(a, callback) {
//     if(typeof a !== 'number') callback("insert a number", null);
//     else if(a >= 0 && a <= 20) callback(null, list[0]);
//     else if(a > 20 && a <= 30) callback(null, list[1]);
//     else if(a > 30 && a <= 40) callback(null, list[2]);
//     else if(a > 40 && a <= 50) callback(null, list[3]);
//     else if(a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         setTimeout(function() {
//             callback(null, list[5])
//         }, 5000)
//     }
// }

// console.log("passed here 0");

// maslahatBering(22, (err, data) => {
//     if(err) console.log("ERROR: ", err);
//     else {
//         console.log("Javob: ", data);
//     }
// });

// console.log("passed here 1");


console.log("TRAIN AREA!");
// A-Task
console.log("A-Task");

// Harf sifatida kiritilgan birinchi parametr, 
// kiritilgan ikkinchi parametr tarkibida nechta ekanligini qaytaruvchi
// Funktsiya tuzing

// Masalan: countLetter("e", "engineer")
// 'engineer' so'zi tarkibida 'e' harfi 3 marotaba takrorlanganligi uchun
// 3 sonini qaytaradi

function countLetter(letter, text) {
    let count = 0;

    if(typeof text !== 'string'){
        console.log("Please enter String format text.");
    } else {
        let arr1 = [];
        arr1 = text.split("");
        const size = arr1.length;
        for(let i = 0; i <= size; i++){
            if(letter == arr1[i]) {
                count++;
            }
        }
        console.log(`"${text}" so'zida "${letter}" harifi ${count} marotaba takrorlandi.`);
        console.log("Natija: ", count);
    }
}
countLetter("e", "engineer");