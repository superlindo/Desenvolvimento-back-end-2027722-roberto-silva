var Emitter = require("./emitter.js");
var Emitter = require("./config.js");

var emitter = new  Emitter();

emitter.on(config.events.LOGIN, function(){
    console.log("LOGIN 1");
})

emitter.on(config.events.LOGIN, function(){
    console.log("LOGIN 2");
})
emitter.emit(config.events.LOGIN);
