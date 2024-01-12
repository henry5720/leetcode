/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    let roman={
        I:1, V:5, X:10, L:50, C:100, D:500, M:1000
    };

    let sum=0;
    for (i=0; i<s.length; i++) {
        let prev=roman[s[i]];
        let next=roman[s[i+1]];

        if (prev<next) {
            sum+=next-prev;
            i++;
        } else {
            sum+=prev; 
        }
    }
    console.log(sum);
    return sum;
};

romanToInt("MCMXCIV");

/*
Symbol       Value          Two Char
I             1             IV(4), IX(9)
V             5
X             10            XL(40), XC(90)
L             50
C             100           CD(400), CM(900)
D             500
M             1000
*/