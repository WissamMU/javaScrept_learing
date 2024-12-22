# node

## module

A module in Node.js is a representation of data and the logic to manage it, often used in MVC (Model-View-Controller) architecture to handle the data layer.

### require : to import a module

```js
const os = require("os");
os.userinfo();
```

#### FS Module

- The fs module in Node.js is a built-in module that allows you to interact with the file system, performing operations like reading, writing, creating, deleting, and renaming files and directories.
  fs.readFile : is a method in Node.js's fs module that reads the entire contents of a file asynchronously.
  fs.readFileSync : is a synchronous method in Node.js's fs module that reads the entire contents of a file. Unlike fs.readFile, it blocks the execution of the script until the file is completely read.

```js
fs.readFile(filename, [options], callback);
// filename: The path to the file to be read.
// options (optional): An object specifying encoding, flag, and mode.
// callback: A function that is called with two arguments:
// error: An error object if an error occurred, otherwise null.
// data: The contents of the file, either as a Buffer or a string if an encoding is specified.
const fs = require("fs");

fs.readFile("myFile.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});

fs.readFileSync(filename, [options]);
const fs = require("fs");

const data = fs.readFileSync("myFile.txt", "utf8");
console.log(data);
```

#### path Module

- The path module in Node.js provides utilities for working with file and directory paths. It helps handle and transform paths across different operating systems, ensuring platform independence.

```js
const path = require("path");

// Join paths
const joinedPath = path.join("public", "images", "profile.png");
console.log(joinedPath); // Output: public/images/profile.png (on Unix-like systems)

// Resolve absolute path
const absolutePath = path.resolve("..", "data.json");
console.log(absolutePath); // Output: /path/to/your/project/data.json (assuming the script is in a subdirectory)

// Get directory name and basename
const filePath = "/home/user/documents/report.pdf";
const dirname = path.dirname(filePath);
const basename = path.basename(filePath);
const extname = path.extname(filePath);
console.log(dirname); // Output: /home/user/documents
console.log(basename); // Output: report.pdf
console.log(extname); // Output: .pdf

// path.parse() method in Node.js's path module breaks down a path into its component parts, returning an object with the following properties:
// root: The root directory (e.g., / on Unix-like systems, C:\ on Windows).
// dir: The directory name.
// base: The basename, which is the filename including the extension.
// ext: The file extension.
// name: The filename without the extension.
const path = require("path");

const parsedPath = path.parse("/home/user/documents/report.pdf");

console.log(parsedPath);
// Output:
// {
//   root: '/',
//   dir: '/home/user/documents',
//   base: 'report.pdf',
//   ext: '.pdf',
//   name: 'report'
// }
```

### export :

In Node.js, you can export functions, variables, and objects from one module (file) and import them into another using the module.exports object or the export keyword

```js
exports.sayHello = () => {
  console.log("Hello, World!");
};

const hello = require("./hello");
hello.sayHello();
```

# data base

- A database is an organized collection of structured information, or data, typically stored electronically in a computer system. 1 Databases 2 are used to store and manage large amounts of structured and unstructured data, and they can be used to support a wide range of activities, including data storage, data analysis, and data management. 3 4

## SQL (Structured Query Language)

- is a programming language used to manage and manipulate relational databases. It's great for structured data with well-defined relationships, like customer information or product inventories.

### ORM (Object-Relational Mapping):

- For: Relational databases (like MySQL, PostgreSQL)
- Maps: Objects in your code to database tables.
- Example: Translates "User" object to "users" table.

### sequelize

Sequelize is a popular Object-Relational Mapper (ORM) for Node.js. It simplifies database interactions by allowing you to define database models as JavaScript classes. This means you can interact with your database using familiar object-oriented concepts, rather than writing raw SQL queries.

## NoSQL (Not Only SQL)

- is a broader category of databases that don't rely on the traditional table-based structure of SQL databases. They are more flexible and can handle large amounts of unstructured or semi-structured data, such as social media posts or sensor data.
- there is four types

1. Document: Stores data in flexible, document-like structures (like JSON).
   : MongoDB
   Example : MongoDB

- is a NoSQL database that stores data in flexible, JSON-like documents.
  Key Features:

* Document-Oriented: Stores data in documents, offering flexibility in data structure.
* Scalability: Easily scales horizontally by adding more servers.
* High Performance: Leverages in-memory data storage for fast queries.
* Rich Querying: Supports complex queries, including ad-hoc queries and aggregations.
* Replication & Load Balancing: Ensures high availability and distributes read traffic for improved performance

- Mongoose is a library for Node.js that makes working with MongoDB easier.
  Key Idea: It lets you define how your data should look (like a blueprint) and then easily interact with your MongoDB database using JavaScript objects.

- Benefits:

* Cleaner Code: Less code to write, easier to read and maintain.
* Data Validation: Ensures your data is structured correctly.
* Simplified Queries: Makes it easier to fetch and manipulate data from your database.

2. Key-Value: Stores data as key-value pairs.
   Example: Redis
3. Column-oriented: Stores data in columns, allowing for efficient storage and retrieval of specific data ranges.
   Example: Cassandra, HBase
4. Graph: Stores data as a network of interconnected nodes (entities) and relationships.
   Example: Neo4j

### ODM (Object-Document Mapper):

- For: NoSQL document databases (like MongoDB)
- Maps: Objects in your code to documents in the database.
- Example: Translates "Product" object to a document in a MongoDB collection.

# Express.js

- is a minimal and flexible Node.js web application framework.

-In simpler terms:

- Think of it as a toolkit for building web servers in Node.js.
- It provides a foundation for handling HTTP requests, defining routes, and sending responses.
- This makes it much easier to create web applications and APIs with Node.js compared to starting from scratch.  
  Key Features:

- Routing: Easily define routes (like "/users" or "/products") to handle different URLs and HTTP methods (GET, POST, PUT, DELETE).
- Middleware: Allows you to add functionality to your application at different stages (e.g., authentication, logging, parsing request data).
- Templating: Supports various templating engines (like EJS, Pug) to dynamically generate HTML.  
  -In essence: Express.js simplifies web development in Node.js by providing a structured and efficient way to handle requests, responses, and various web application functionalities.

GET:

- Purpose: Retrieves data from a server.
- Data Transmission: Data is sent as part of the URL (in the query string).
- Visibility: Data is visible in the browser's address bar.
- Security: Less secure due to data exposure in the URL.

* Example: Fetching a webpage, retrieving a list of products.
  POST:

- Purpose: Sends data to the server to create, update, or delete resources.
- Data Transmission: Data is sent in the request body, hidden from the URL.
- Visibility: Data is not visible in the browser's address bar.
- Security: Generally more secure than GET for sensitive data.

* Example: Submitting a form, uploading files, creating a new user account.

* In essence:

- GET: Used for retrieving data.
- POST: Used for submitting data, creating, updating, or deleting resources.
- PUT: Update all data
- DELETE: Remove dat

## Middleware

- in Express.js is like a series of checkpoints for web requests.

1. It intercepts requests before they reach the final destination.
2. Performs actions: Like checking for authentication, logging data, or parsing request bodies.
3. Then: Either allows the request to continue or stops it.

- meddleware to show time
- next allow the request to contixDnue

```js
app.use((req, res, next) => {
  console.log(`Request made at ${new Date()}`);
  next();
  // if we dont want to allow access
  return res.status(403).send("forbidden");
});
```

## JWT

- (JSON Web Token) is a secure method for transmitting information between parties as a digitally signed JSON object. It's like a secure digital passport that allows for authentication and authorization in web applications.

**Creation:**

- When a user successfully authenticates (e.g., by logging in), the server generates a JWT.
- This JWT contains claims about the user (like their ID, username, roles, and expiration time).
- The server signs this JWT using a secret key known only to itself, ensuring its integrity.

**Transmission:**

- The server sends the JWT to the client (e.g., in the response to the login request).
- The client stores the JWT (e.g., in a cookie or local storage) and includes it in subsequent requests to protected resources.

**Verification:**

- When the client sends a request with the JWT, the server receives it.
- The server verifies the JWT's signature using the same secret key used during creation.
- If the signature is valid, the server decodes the JWT and extracts the user's information.
- This allows the server to authenticate and authorize the user's access to the requested resource.

**Key Advantages:**

- **Security:** Digitally signed to prevent tampering.
- **Statelessness:** No need for the server to maintain session data for each user.
- **Flexibility:** Can be used for various authentication and authorization scenarios.

Essentially, JWTs act as secure digital passports, enabling seamless and secure user interactions within web applications.

for example look in express folder

## Express Generator

- is a command-line tool that streamlines the creation of Express.js web applications. It generates a basic project skeleton with pre-defined files and directories, providing developers with a ready-to-use foundation for their projects, enabling them to quickly start building their application logic without the overhead of initial setup.

# rate movies api

- small api to rate movies

1. after setup using express generator add those
  - npm i -D bcrypt dotenv jsonwebtoken mongoose
2. add .env file for environment variables note need require('dotenv').config(); in bin/www
3. connect with mongoose
4. made models for users and movies
5. Registration with JWT and Authentication with middleware
6. route the authenticated with routes/auth.js 
7. for organization made file (controllers) 
8. inside conntrollers added the ability to login in register or check your personal info
9. manged Movies 