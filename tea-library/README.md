# My web app test
I wanted to play around a little with react, i found a wholesome book at the libary with tea recepies made from herbs. 

## The plan
i started out with a different idea than i have now so here it the plan for now

### 1. Get rid of the JSON temporary data storage
I want to get rid of the temporary JSON files i am using as a database. 
I mave started to create a mongodb database, there are scemas and a connection tp the react app that works, now i need to figure out how to render the database info upon loading a page.

### 2. Image storage
I want to make a functioinality that allows me to uppload images that will then be displayed on the website. I am planning on making a server for that. It will host the pictures and they will be accesssible with links from the website. 

alt. use multer

### 3. Add recepie functionality 
Add ui logic and databse for the handeling recepies and complete ingredient functinality

### 4. Style forms
-Complete the website style <br>
-Fix resizing issues on homepage<br>


## Start program

Start mongodb in a terminal 
```
mongod
```
Navigate to the backendfolder and type this command to start the database

```
node index.js
```
To start the web application navigate to the my-app folder 
```
npm start
```


