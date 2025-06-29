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

//Alternate solutions

/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
    let left = 0
    let right = n

    //k*(k+1)/2 <= n

    if (n==1){
        return 1
    }

    while (left < right) {
        let mid = Math.floor((left + right) / 2) + 1
        let sum = mid * (mid + 1) / 2;
        if (sum === n) {
            return mid;
        }
        if (sum < n) {
            left = mid 
        }
        else if (sum >= n) {
            right = mid - 1
        }
    }

    return right



};

/*

n = 1,2
answer = 1

if n =5,4,3
1+2+2 1+2+1 answer is 2 6-3
answer = 2

6,7,8,9 will find this on the 4th row but 4
1+2+3  1+2+3+1 1+2+3+2 1+2+3+3 4 rows but we return rows -1 10-4
answer = 3


1*(1+1)/2 = i


*/