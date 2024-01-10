
let isimler = ["bahadir","burak","alper"];
// console.log(isimler[1]);

isimler[1]="damla"; 
// console.log(isimler[1]);

let yaslar = [3,18,25,50];
// console.log(yaslar[3]);

let tireli = isimler.join("-");
console.log(tireli);

let sira = isimler.indexOf("alper");
console.log(sira);


let ekle = isimler.concat(["adem","fatih"]);
console.log(ekle);