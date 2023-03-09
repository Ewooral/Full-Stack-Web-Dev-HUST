# HTTP

Hypertext Transfer Protocol (HTTP) is an application-layer protocol for transmitting hypermedia documents, such as HTML. It was designed for communication between web browsers and web servers, but it can also be used for other purposes. HTTP follows a classical client-server model, with a client opening a connection to make a request, then waiting until it receives a response. HTTP is a stateless protocol, meaning that the server does not keep any data (state) between two requests.

* http request involves URL, body, headers and more

# Fetch API

Makes requesting `data` from a server very simple.
It takes two inputs, **URL**, **settings object**
an **await** keyword is also used in front of the fetch call because it's asynchronous

       const response = await fetch(url, {})

* After fetching data from the server, we need to parse it
into actual JS json object

       const responseObj = await response.json()


# Web Addresses
Every computer has an `IP (internet protocol)` address for communication over the internet. Sometimes these IP
addresses are difficult to memorise or are not human 
readable. That's where DNS (Domain Name System) comes in.

* `DNS (Domain Name System)` maps human readable texts to an IP address thus, resolves domain names into IP addresses.