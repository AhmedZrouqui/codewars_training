// return masked string
function maskify(cc) {
    let masked = "";
    if(cc.length < 5) return cc
    for(let i =0; i < cc.length; i++){
        masked += cc.length - i > 4 ? '#' : cc[i];
    }
    return masked;
}

//using slice method
function maskify(cc) {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}
  