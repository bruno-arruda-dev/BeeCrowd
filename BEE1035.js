var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

// let a = parseInt(lines.shift());
let a = parseInt(lines[0]);
// let b = parseInt(lines.shift());
let b = parseInt(lines[1]);
// let c = parseInt(lines.shift());
let c = parseInt(lines[2]);
// let d = parseInt(lines.shift());
let d = parseInt(lines[3]);

if (b > c && d > a && c + d > a + b && c > 0 && d > 0 && a % 2 == 0) {
    console.log('Valores aceitos');
} else { 
    console.log('Valores nao aceitos')
};