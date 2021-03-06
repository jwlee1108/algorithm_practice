var path = require('path');
var input = require('fs').readFileSync(path.resolve('./02.10973.txt'), 'utf8').toString().trim().split('\n');
// var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var n = input[0];
var p = input[1].split(' ');

function nextPermutation(p, n) {
    var ix = n - 1;
    while (ix > 0 && +p[ix - 1] <= +p[ix]) {
        ix -= 1;
    }

    if (ix <= 0) {
        return false;
    }

    var jx = n - 1;
    while (+p[jx] >= +p[ix - 1]) {
        jx -= 1;
    }
    swap(p, ix - 1, jx);
    jx = n - 1;
    while (ix < jx) {
        swap(p, ix, jx);
        ix += 1;
        jx -= 1;
    }
    return true;
}

function swap(array, a, b) {
    var temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}

if (nextPermutation(p, n)) {
    console.log(p.join(' '));
} else {
    console.log(-1);
}