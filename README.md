# TypeScript workshop
##### Authors: Kevin Van Houtte

This workshop will guide you through the core elementals of TypeScript.
Each branch has a exercise that leads step by step till the final solution.
Exercise 2 will have the solution of exercise 1 and so on... 
So try your best and may the force guide you!


### Prerequisites
Some software is needed to perform this lab.  
1. **Editor**.  *IntelliJ* is great tool and transpiler for TypeScript.  
2. **NodeJS**. NPM (package manager) is needed to get dependencies (compare with Maven or Gradle). Can be downloaded at https://nodejs.org/en/ . Avoid installing using brew/macports etc. as it can lead to permission problems. If NPM is installed correctly, you should be able to run **npm --version** in your terminal/command prompt

### TypeScript
When NodeJS is installed you can use NPM to install TypeScript.
```sh
npm install typescript -g
```

Create a file **greeter.ts** and add 
```javascript
var name: string = "John Doe";
```

and then run 
```sh
tsc greeter.ts
```

It now transpiles your ts file to a js file. This is because the browser only recognizes JavaScript. 
Let's go to our first exercise.
To go the next exercise 
```sh
git checkout ex1-HelloWorld
```


