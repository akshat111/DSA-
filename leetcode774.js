/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let start =0;
    let end =letters.length -1; 
    while(start<= end){
        let mid = Math.floor((start+end)/2);
        if(letters[mid] <= target){
            start = mid +1;
        } else{
            end = mid -1;
        }
    }
    return letters[start % letters.length];
};