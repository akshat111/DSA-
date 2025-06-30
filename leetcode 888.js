/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function(a,b) {
    let arr = new Array(2);
    let suma= 0, sumb=0; 

    for(let i=0; i<a.length;i++)
    suma = suma + a[i];

    for(let i =0; i<b.length;i++)
    sumb= sumb+ b[i];

    for(let i=0; i<a.length; i++){
        for(let j=0; j<b.length;j++){
            if(suma -a[i] + b[j] == sumb + a[i] - b[j]){
                arr[0] = a[i];
                arr[1] = b[j];
                return arr;
            }
        }
    }
    return arr;
};