# Package.json File

- Semantic Versioning
  <Major Versioning>.<Minor Versioning>.<Patch>

        npm install can specify the acceptable package verion:

  - `exact`: npm install `express@4.0.0`
  - `patch` acceptable: npm install `express@"~4.0.0"`
  - `minor` version acceptable: npm install `express@"^4.0.0"`

  npm install `module name` --save means the package is a `dependency` for our project
  and needs to be `saved` in the package.json file.

# Web Services

A system designed to support interoperability of systems connected over a network

    - Service oriented architecture(SOA)
    - A standardized way of integrating web-based applications using open standards
        operating over the internet

- Two common approaches used in practice:
  - SOAP (Simple Object Acess Protocol) based services
    - Uses WSDL (web services description language)
    - XML based
  - REST (Representational State Transfer)
    - Use web standards
    - Exchange of data using either XML or JSON
    - Simpler compared to SOAP, WSDL etc.

## REST

    Rest uses four basic design principles:
        - Use HTTP methods explicitly
        - Be stateless
        - Expose directory structure-like URLs
        - Transfer using XML, JavaScript Object Notation (JSON) or both.

## REST - Verbs

Represent the actions to be performed on resources corresponding to the CRUD operations.

- HTTP GET - READ
- HTTP POST - CREATE
- HTTP PUT - UPDATE
- HTTP DELETE - DELETE

## Stateless Server

Server side should not track the client state:

- Every request is a new request from the client

Client side should track its own state

- E.g. using cookies, client side database
- every request must include sufficient information for server
  to serve up the requested information
- Client-side MVC setup

## Express Router

Express router creates a mini-express application

```js
var dishRouter = express.Router();
dishRouter.use(bodyParser.json());

dishRouter.route('/')
  .all();
  .get();
  ...
```

## Start an Express Project

npm init

Start a project E.g. Express js

##

npm install express nodemon

## Additional dev dependencies to make sure project is compatible with ES6

npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/node

## configuration file for babel

create a `.babelrc` file at the project root and in the file indiate the presets installed

    {
        "presets": ["@babel/preset-env"]
    }

## Add type to the package.json file

    "type": "module"

## What is a body parser?

A `body parser` is a software component or module that is used to parse and extract data
from the body of an incoming HTTP request. In web development, when a client sends data
to a server through an HTTP request, the body of the request contains the payload or data being sent. The body parser helps to extract and parse this data so that it can be processed and used by
the server application. It is commonly used to handle data formats such as JSON, XML, or form
data in various programming languages and frameworks.
