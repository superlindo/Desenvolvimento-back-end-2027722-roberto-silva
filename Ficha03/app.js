function started(){
    console.log("Download STARTED!");
}

function update(progress){
    console.log(progress + "% COMPLETED");
}

function completed(){
    console.log("Download COMPLETED!");
}

function performDownload(fn_s, fn_u, fn_c){
    fn_s();

    for (i = 0; i <= 100; i++) {
        fn_u(i);
    }

    fn_c();
}

performDownload(started, update, completed); //Estas 3 funções são chamadas de modo a que fn_s, fn_u e fn_c tenham valor de started, update e completed

var ArrayUtils = require('./ArrayUtils.js');
var array = [1,2,3,4,9];
var empty = ArrayUtils.isEmpty(array);
console.log(ArrayUtils.maximum(array));
console.log(ArrayUtils.minimum(array));
console.log(ArrayUtils.average(array));
console.log(ArrayUtils.indexOf(array, 9));
console.log(ArrayUtils.subArray(array, 1, 3));
console.log(ArrayUtils.swap(array,0,2));
console.log(ArrayUtils.contains(array,0));


var Emitter = require(".emitter.js");

var emitter = new  Emitter();

emitter.on("LOGIN", function(){
    console.log("LOGIN 1");
})