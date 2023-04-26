function fetchData2(val){
    return new Promise(function(resolve , reject){
        setTimeout(function(){
            if(val % 2 == 0){
                resolve(val);
            }
            else reject(val);
        },3000);
    });
}

x = fetchData2();
console.log(x);