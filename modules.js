const names = require('./names')
const sayHi = require('./utils')
const data = require('./alt-flavor')
//console.log(names)
const n = require('./mind-grenade')

var l = (p)=>{
    count = 1
    let  t = p[0]
    while ( t!=null){
        count++
        t = p[count-1]
    }
    return count-1
}

//console.log(l(sayHi(names.susan)))

const myTest = (phrase) => {
    return `Phrase: ${phrase} | Lenght : ${l(phrase)}`;
}

module.exports = myTest

// console.log(n)
// sayHi('brunel')
// sayHi(names.peter)
//sayHi(names.susan)