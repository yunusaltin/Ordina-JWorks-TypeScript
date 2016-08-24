# ex3 - Get Data from external sources

When working on a project you will interact with external sources you have to use for your application.
A couple examples: REST API calls, via SOAP

In this exercise you will be getting data from a local json file called **items.json**
To parse the json I will give you a helper class. 

1. Create a new static method fromJSON for every item (Book and Movie)
* Parameter: data of type any
* returns item initialised with data from the parameter

2. Go to the Library class and modify
* Clean out the constructor
* Remove the publishItems method
* Remove the items array
* We will need 2 arrays now, one for Books and one for Movies and pass it through the constructor
* Initialise the 2 arrays in the static method with the json resource
* Make a new method to return all items

3. Activate the code in app.ts and run your index.html to see result!

# JS Help
* For getting the resource out of the json: use the map option and the two static methods from Movie and Book