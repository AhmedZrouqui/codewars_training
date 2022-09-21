//The below function returns true or false depending on whether if the number is narcissistic or not.
function narcissistic(value) {
    const len = String(value).length;
    let sum = 0;
    if(len < 2) return true
    for(let i =0; i < len; i++){
        sum += Math.pow(Number(String(value)[i]), len);
    }
    if(sum !== value) return false;
    return true;
}

//same function using reduce
function narcissistic2(value){
    if(String(value).length < 2) return true;
    return String(value).split('').reduce((p, c) => {
      return p + Math.pow(c, String(value).length);
    }, 0) === value
}