console.log(NaN === NaN) ; //false
console.log(null === null) ; //true
console.log(undefined === undefined) ; //true
console.log(+0 === -0) ; //true
console.log(23 === 23) ; //true
console.log('abhi' === 'abhi') ; //true

console.log({} === {}) ; //false
let x = {} ;
console.log(x === x) ; //true

console.log(Symbol('abhi') === Symbol('abhi')) ; //false
let y = Symbol('abhi') ;
console.log(y === y) ; //true