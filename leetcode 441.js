/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let start =1;
    let res = 0;
    while( n>= start){
        n -= start;
        res++;
        start++;
    }
    return res;

};

//Arranging coins

//(n(n+1))2