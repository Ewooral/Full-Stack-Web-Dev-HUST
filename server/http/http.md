# HTTP

Hypertext Transfer Protocol (HTTP) is an application-layer protocol for transmitting hypermedia documents, such as HTML. It was designed for communication between web browsers and web servers, but it can also be used for other purposes. HTTP follows a classical client-server model, with a client opening a connection to make a request, then waiting until it receives a response. HTTP is a stateless protocol, meaning that the server does not keep any data (state) between two requests.

http request involves URL, body, headers and more

# Fetch API
makes requesting data from a server very simple.
It takes two inputs, **URL**, **settings object**
an **await** keyword is also used in front of the fetch call because it's asynchronous

       const response = await fetch(url, {})