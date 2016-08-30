# ex2 - Classes, Interfaces, Inheritance and Types

Now that you had a warm up, we will be looking at the core concepts of TypeScript. 

1. Compile using **tsc**  or autocompile.
2. Start the "application", i.e. open the index.html file and see how it looks. Currently, two class-less item is added using strings.

We are gonna build an OO architecture for a library of movies and books.
First we need to build the according classes to work with.
For every class you can create a new file to make it more readable for you, but it will require more script tags in html.
Now build the following classes with their corresponding members/methods and constructor:

#### Class: Author
| Field        | Type                             |
| ----------- |:---------------------------------| 
| name       | string variable                  |  
   
   
#### interface: Rating
| Field        | Type                             |
| ----------- |:---------------------------------| 
| age         | number variable                  | 
| name        | string variable                  |  
   
   
#### Abstract Class: Item
| Field        | Type                             |
| ----------- |:---------------------------------| 
| title       | string variable                  | 
| genre       | string variable                  |  
| description | string variable                  |   
| render      | abstract void method, accepts HTMLElement |
   
#### Class: Movie, Extends: Item, implements: Rating
| Field        | Type                             |
| ----------- |:---------------------------------| 
| title       | string variable                  | 
| genre       | string variable                  |  
| description | string variable                  |   
| render      | void method, accepts HTMLElement parameter |
   
#### Class: Book, Extends: Item
| Field        | Type                             |
| ----------- |:---------------------------------| 
| title       | string variable                  | 
| author      | Author                           |  
| genre       | string variable                  |  
| description | string variable                  |   
| render      | void method, accepts HTMLElement parameter |
   
   
#### Render method
* Create an article html element.
* Fill it with the data from your class. 
* Use the HTMLElement in the parameter to append the article.

#### Class Library
Finally we will make a class named Library to output our items to the screen. 
* Make a list of items (don't forget to initialise it before use).
* Constructor to fill the list of items (make some instances of various movies and books).
* Make a method to output this list in to the HTML. 

#### app.ts
* Remove everything.
* Make an instance of the Library class and call the method.
* Run index.html and look at the result!



