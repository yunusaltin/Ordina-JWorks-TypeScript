# Exercise 1: Hello World

### Setup
This exercise is to setup the environment and put something on the screen. 
The main goal of this exercise is to get "Hello World" on the screen.
First we need setup our compilation from TS to JS for the browsers sake. 
Execute following command to install TypeScript.

 ```sh
   npm install typescript -g --save-dev
   ```

### Config files
1. For our dependencies we need a package.json file, use **npm init** to create and initialise. You will get a lot of questions just name it and leave everything to default
2. When installed we need to have a config file to tell the transpiler what we want. Create a **tsconfig.json** with the following input.  

  ```sh
    {
        "compilerOptions": {
            "target": "es5",
            "outDir": "js",
            "sourceMap": true
        },
        "exclude": [
            "node_modules"
        ]
    }
   ```
    
### Transpiling issues
1. Either your IDE auto transpiles your TS scripts to JS.
2. Or you can use the **tsc** command to transpile.

### Exercise
1. Create a source folder for all the source code
2. Create a TypeScript source file (**app.ts**)
3. Create a function that updates the <span> element in the HTML with "Hello " and an input name. The input name should be of **string type**. 
3. When opening your application in the browser you can check if the code is working!