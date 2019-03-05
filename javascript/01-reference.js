const n1 = 12;
const n2 = n1; // passage par copie
n2 = 13;

console.log('n1', n1); // 12
console.log('n2', n2); // 13

const o1 = { a: 12 };
const o2 = o1; // passage par référence (copié la référence / créé un 2e moyen pour à l'objet)
o2.a = 13;

console.log('o1.a', o1.a); // 13
console.log('o2.a', o2.a); // 13
console.log('o1 === o2', o1 === o2); // true


// cette copie n'est pas récursive
// pour des copies récursive -> cloneDeep dans lodash
const o3 = {...o1}; // clone de l'objet
o3.a = 14;

console.log('o1.a', o1.a); // 13
console.log('o2.a', o2.a); // 13
console.log('o3.a', o3.a); // 14
console.log('o1 === o3', o1 === o3); // false