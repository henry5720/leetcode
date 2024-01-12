/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    if (s.length <= 1 && s.length >= 10^4){
        console.log("len: ",s.length);
        return false;
    }
    if (s.length%2 != 0) {
        console.log("除2: ", s.length%2);
        return false;
    }

    let vaild={
        ")": "(",
        "]": "[",
        "}": "{"
    }
    let queue=[];
    // 遍歷字串
    for (let i=0; i<s.length; i++) {
        // 是([{ -> [數組push] queue
        if (s[i]==="(" || s[i]==="[" || s[i]==="{") {
            queue.push(s[i]);
            console.log("1:", queue);        
        } 
        // 是)]} -> 比對
        else if (s[i]===")" || s[i]==="]" || s[i]==="}") {
            // 是()[]{} -> [數組pop] queue
            if (vaild[s[i]]===queue[queue.length-1]) {
                queue.pop();
                console.log("2:", queue);
            }else {
                console.log("3:", queue);
                return false;
            }
        } 
        // 不是([{}])
        else {
            console.log("4:", queue);
            return false;
        }
    }

    console.log("result:", queue);
    if (queue.length===0) {
        return true;
    } else{
        return false;
    }
};

isValid("([}}])");

// faster
/*
 var isValid = function(s) {
    const left = [];
    const legend = {
      '(': ')',
      '{': '}',
      '[': ']'
    };
    for (let i = 0; i < s.length; i++) {
      if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
        left.push(s[i]);    
      } else if (legend[left.pop()] !== s[i]) {
        return false;
      }
    }
    return left.length ? 0 : 1;
  };
*/ 