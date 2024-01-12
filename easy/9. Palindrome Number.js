/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    x=x.toString();
    let arr1=x.split("");
    let arr2=[];
    for (i=arr1.length-1; i>=0 ; i--) {
        arr2.push(arr1[i]);
    }
    let y=arr2.join("");
    console.log("arr1", arr1);
    console.log("arr2", arr2);
    if (y == x) {
        return true;
    }else {
        return false;
    }
};

isPalindrome(121);

// js 較優解
var isPalindrome = function(x) {
    //Short circuit 
    if(x < 0 || (x !== 0 && x % 10 == 0))
        return false;

    let reverse = 0;
    
    while (x > reverse) {
        reverse = reverse * 10 + x % 10;
        x = ~~(x/10);
    }
    
    return x === reverse || x === ~~(reverse/10);
};