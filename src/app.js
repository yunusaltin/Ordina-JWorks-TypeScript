var user = 'Yunus';
function greet(inputname) {
    return "Hello, " + user;
}
function printHelloWorld(person) {
    document.getElementById("welcome-text").innerHTML = greet(user);
}
printHelloWorld(user);
