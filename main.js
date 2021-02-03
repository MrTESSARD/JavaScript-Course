// Boucles
// For, while, do while, forEach

let fruits = ["Pomme","Orange","Citron","Fraise"];
// Boucles for
// Version "normale"
for(let i = 0; i < fruits.length ; ++i){
    console.log(fruits[i], 'normale'+i);
}
//Version adaptée aux arrays
for(let fruit of fruits){
    console.log(fruit);
}
// Version adaptée aux objets (qui marche sur les arrays car TECHNIQUEMENT les arrays sont des objets MAIS C'EST UNE MAUVAISE METHODE CAR ELLE MULTIPLIE LE TEMPS DE TRAITEMENT PAR 10 (minimum) VOIRE 100)
for(let key in fruits){
    console.log(fruits[key]);
}

// Boucles while

let j = 0;//déclarer l'itérateur
while(j < 15){
    console.log(j);
    ++j
};// Tant que; la boucle while prend une seule condition et nécessite de coder l'itération

// Boucle do...while
let iterator = 1;
do{
 iterator += 1;
 console.log(iterator);
}while(iterator<1);
