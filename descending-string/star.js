var colors = require('colors');

exports.starModule = function (){
  var string = "*"
    for(var i = 30; i >0; i--){
         console.log(string.repeat(i).blue)
    }
    for(var i = 2; i <30; i++){
         console.log(string.repeat(i).red)
    }
}
