module.exports = function (){
    let time = new Date();

    let h = time.getHours().toString();
    let m = time.getMinutes().toString();

    let y = time.getFullYear().toString();
    let M = time.getMonth().toString();
    let d = time.getDate().toString();

    if(h.length < 2){
        h = `0` + h;
    }
    if(m.length < 2){
        m = `0` + m;
    }
    if(y.length < 2){
        y = `0` + y;
    }
    if(M.length < 2){
        M = `0` + M;
    }
    if(d.length < 2){
        d = `0` + d;
    }

    return `${h}:${m} ${y}.${M}.${d}`;
 }