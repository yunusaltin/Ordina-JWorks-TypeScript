# ex3 - Get Data from external sources

When working on a project you will interact with external sources you have to use for your application.
A couple examples: REST API calls, via SOAP

In this exercise you will be getting data from a local json file called **items.json**
To parse the json I will give you a helper class. 

#### Book.ts & Movie.ts
* Create a new static method fromJSON with 1 parameter of type any. 
* Returns Book or Movie object initialised with the input

#### Library.ts
* Clean out the constructor
* Remove the publishItems method
* Create an array for Movie and Book 
* Give the constructor these two arrays.
* Implement the static method fromJSON: initialise the two arrays with the data you get from the json
* Make a new method that concatenates and returns all items 

3. Activate the code in app.ts and run your index.html to see result!

# JS Help
* For getting the resource out of the json: use the map option and the two static methods from Movie and Book