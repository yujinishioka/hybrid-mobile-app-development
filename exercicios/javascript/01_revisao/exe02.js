const verdade = true;
const falso = false;

console.log('True && True = ', (verdade && verdade));
console.log('True && False = ',(verdade && falso));
console.log('False && False = ',(falso && falso));
console.log('-----------------------')

console.log('True OR True = ', (verdade || verdade));
console.log('True OR False = ',(verdade || falso));
console.log('False OR False = ',(falso || falso));
console.log('-----------------------')

console.log('NOT True = ', (!verdade));
console.log('NOT False = ',(!falso));
console.log('-----------------------')

console.log('True XOR True = ', (verdade ^ verdade));
console.log('True XOR False = ',(verdade ^ falso));
console.log('False XOR False = ',(falso ^ falso));