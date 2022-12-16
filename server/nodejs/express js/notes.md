# Package.json File
- Semantic Versioning
    <Major Versioning>.<Minor Versioning>.<Patch>

        npm install can specify the acceptable package verion:
    * `exact`: npm install `express@4.0.0`
    * `patch` acceptable: npm install `express@"~4.0.0"`
    * `minor` version acceptable: npm install `express@"^4.0.0"`


    npm install `module name` --save means the package is a `dependency` for our project
    and needs to be `saved` in the package.json file.



# Web Services
A system designed to support interoperability of systems connected over a network

    - Service oriented architecture(SOA)
    - A standardized way of integrating web-based applications using open standards
        operating over the internet

* Two common approaches used in practice:
    - SOAP (Simple Object Acess Protocol) based services
        * Uses WSDL (web services description language)
        * XML based
    - REST (Representational State Transfer)
        * Use web standards
        * Exchange of data using either XML or JSON
        * Simpler compared to SOAP, WSDL etc.

## REST
    Rest uses four basic design principles:
        - Use HTTP methods explicitly
        - Be stateless
        - Expose directory structure-like URLs
        - Transfer using XML, JavaScript Object Notation (JSON) or both.


## REST - Verbs
Represent the actions to be performed on resources corresponding to the CRUD operations.

 * HTTP GET  - READ
 * HTTP POST - CREATE
 * HTTP PUT  - UPDATE
 * HTTP DELETE - DELETE


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