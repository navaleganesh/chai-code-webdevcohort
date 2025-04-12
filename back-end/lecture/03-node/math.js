/*function add(x,y){
    return x+y;
}

function mul(a,b){
    return a*b
}

exports.ganesh = 'This is functions'
 */

//Named Export
/*exports.add = function(x,y){
    return x+y;
}

exports.mul = function(a,b){
    return a*b
}*/

//Default
module.exports.ganesh = 'This is functions'

function add(x,y){
    return x+y;
}

function mul(a,b){
    return a*b
}

module.exports = {
    add,
    mul
}