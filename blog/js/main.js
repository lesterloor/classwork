function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
function helloWorld(name) {
    if (name) {
        console.log(`Hello ${name}, and welcome to the world of computing!`);
    } else {
        console.log('Hello world!');
    }
}
