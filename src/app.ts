let user = 'Yunus';

function greet(inputname: string) {
    return "Hello, " + user;
}

function printHelloWorld(person: string) {
    document.getElementById("welcome-text").innerHTML=greet(user);
}

printHelloWorld(user);