# HTTP

Hypertext Transfer Protocol (HTTP) is an application-layer protocol
for transmitting hypermedia documents, such as HTML. It was designed
for communication between web browsers and web servers, but it can also
be used for other purposes. HTTP follows a classical client-server model,
with a client opening a connection to make a request, then waiting until
it receives a response. HTTP is a stateless protocol, meaning that the server
does not keep any data (state) between two requests.

### NB

`HTTPS` is the secured version of HTTP, which makes it better suited to instances
where security is a concern. But let's find out how this works. With HTTPS, the
client's computer encrypts data before it starts its journey to the server.
The server then decrypts this client-side data and processes it. But the web server
also encrypts the response data and sends the encrypted content back to your browser.
Your browser then decrypts the response and displays it. Since the content is encrypted, it
is more secure and very difficult to steal or retrieve information from it. For submitting
sensitive data, like credit card information, it is always preferable to use HTTPS to make
sure the data is secure.

### HTTP VERBS/METHODS

- GET - Retrieve
- POST - Create
- PUT - Update
- PATCH - Partially update
- DELETE - Delete

#### http request

- Involves Version type eg. 1.1 or 2.0
- URL or path
- METHODS
- Request headers eg. cookies, user-agents, referrers
- Body (optional)

#### http response

- contains requested resource
- content length
- content type
- ETags
- http status codes eg. 301, 404

              100 - 199 - informational messages
              200 - 299 - successful responses
              300 - 399 - Redirection information
              400 - 499 - client error responses
              500 - 599 - server error codes

# Fetch API

Makes requesting `data` from a server very simple.
It takes two inputs, **URL**, **settings object**
an **await** keyword is also used in front of the fetch call because it's asynchronous

       const response = await fetch(url, {})

- After fetching data from the server, we need to parse it
  into actual JS json object

         const responseObj = await response.json()

# Web Addresses

Every computer has an `IP (internet protocol)` address for communication over the internet. Sometimes these IP
addresses are difficult to memorise or are not human
readable. That's where DNS (Domain Name System) comes in.

- `DNS (Domain Name System)` maps human readable texts to an IP address thus, resolves domain names into IP addresses.
