# WHAT IS AN API

An API is the tool that makes a website's data
digestible for a computer. Through it, a computer
can view and edit data, just like a person can by
loading pages and submitting forms.

## Core Parts of an API

here are the core parts of an API:

1. Endpoints: These are the URLs that the API exposes to allow clients to interact with it.

2. Methods: APIs use HTTP methods such as GET, POST, PUT, and DELETE to allow clients to perform different actions on the resources exposed by the API.

3. Parameters: APIs accept parameters as part of the request to provide additional information or to filter the results returned.

4. Headers: These are additional metadata that can be sent with the request to provide more information about the client or the request itself.

5. Authentication: APIs often require authentication to ensure that only authorized clients can access certain resources.

6. Response format: APIs return data in a specific format such as JSON, XML, or CSV.

7. Error handling: APIs must handle errors gracefully and provide meaningful error messages to clients in case of failures.

8. Rate limiting: APIs may limit the number of requests a client can make within a certain time period to prevent abuse and ensure fair usage.

## here are some key constraints used to create APIs:

1. Input Validation: APIs should validate all input parameters to ensure that they meet the expected data type, format, and length.

2. Authentication and Authorization: APIs should use authentication and authorization mechanisms to ensure that only authorized clients can access certain resources.

3. Rate Limiting: APIs should limit the number of requests a client can make within a certain time period to prevent abuse and ensure fair usage.

4. Error Handling: APIs should handle errors gracefully and provide meaningful error messages to clients in case of failures.

5. Data Protection: APIs should protect sensitive data by encrypting it in transit and at rest.

6. Versioning: APIs should support versioning to ensure that clients can continue to use older versions of the API while newer versions are being developed.

7. Idempotency: APIs should support idempotency to ensure that the same request can be repeated multiple times without causing unintended side effects.

8. Consistency: APIs should be consistent in their response format, error messages, and behavior across all endpoints and versions.

### API naming conventions

The naming conventions used in API creation may vary depending on the specific programming language or framework being used. However, here are some common naming conventions:

1. Endpoint Naming: API endpoints are often named using nouns that represent the resource being accessed, such as "/users" or "/products".

2. HTTP Method Naming: HTTP methods are typically used as part of the endpoint name, such as GET, POST, PUT, DELETE, etc.

3. Resource Naming: Resources exposed by the API are often named using plural nouns, such as "users", "products", or "orders".

4. URL Structure: APIs often follow a hierarchical URL structure, representing the relationship between resources. For example, "/users/{userId}/orders" to retrieve orders for a specific user.

5. Parameter Naming: Parameters used in API requests are typically named using lowercase letters and separated by underscores, such as "user_id" or "product_name".

6. Response Naming: The response data structure or properties are often named using lowercase letters and following a consistent naming convention like camel case or snake case.

7. Error Naming: Error codes or messages returned by the API may follow a specific naming convention, such as using uppercase letters and underscores, like "INVALID_REQUEST" or "RESOURCE_NOT_FOUND".

It's important to note that these are general conventions, and specific APIs or frameworks may have their own naming conventions or guidelines.
Question :

### Here are some REST best practices:

1. Use descriptive and meaningful resource URIs: URIs should represent the resources being accessed, and they should be intuitive and easy to understand.

2. Use HTTP methods correctly: Use the appropriate HTTP methods like GET, POST, PUT, and DELETE for the corresponding actions (e.g., GET for retrieving data, POST for creating data, PUT for updating data, DELETE for deleting data).

3. Use HTTP status codes correctly: Return the appropriate HTTP status codes to indicate the success or failure of a request (e.g., 200 for successful GET request, 201 for successful resource creation, 404 for resource not found).

4. Use nouns instead of verbs in URIs: URIs should typically represent resources, not actions or operations. Use nouns instead of verbs for better clarity and consistency.

5. Use plural nouns for resource collections: Use plural nouns in URIs to represent collections of resources (e.g., /users for a collection of users).

6. Use query parameters for filtering, sorting, and pagination: Use query parameters to allow clients to filter, sort, or paginate through large collections of resources.

7. Version your API: Include a version number in the URI or headers to ensure backward compatibility and allow for future updates without breaking existing clients.

8. Use HATEOAS (Hypermedia as the Engine of Application State): Include links in API responses to guide clients on available actions and resources.

9. Implement proper error handling: Return meaningful error messages and appropriate HTTP status codes to help clients understand and handle errors effectively.

10. Implement caching: Utilize caching mechanisms like ETags or cache-control headers to improve performance and reduce unnecessary requests.

11. Ensure security: Implement secure communication using HTTPS, handle authentication and authorization properly, and validate and sanitize input data to prevent security vulnerabilities.

# RESTapi Detailed explanation

Now that you've had a refresher on HTTP and HTTPS, you are ready to learn about REST APIs. But first,
you need to know what is REST. In other words, what makes the API RESTful? An `API` or application programming
interface is a `gateway` to back-end data. It allows you to easily access and modify this data, And REST is an
architectural style for designing APIs for your project. It is hugely popular among developers because it's much
easier to develop and implement than other architectural styles. What works in your favor is that the learning curve
isn't steep and you can create production-ready APIs in a short time but let's not jump too far ahead. You're not quite
creating APIs yet rather you're first learning about the basics of REST APIs. REST APIs provide an easy way for you to
communicate with the server and access the data that powers your application. But an API is only RESTful if it complies
with certain constraints. Let's examine them. It must have client-server architecture, a REST API is always Stateless, and it
should be Cacheable. It should be layered, have a uniform interface and it might also include code on demand, but this is optional.
Let's explore each in more detail. The API should use client-server architecture. There should be a server that is serving
the resources and there should be a client who consumes them. `A REST API is Stateless`, this means that the server does not
contain any state of the API client who is making the call so it cannot identify who is making the request or what their
previously requested data was without proper user information. In fact, the State is only saved on the client machine, not
on the server and this influences what you should include in your API endpoints or URL Paths but more on this later. The API
should also be Cacheable. This means that responses can be saved by a web browser or a server or any system. This caching process
can help to reduce the server load by using the API result from the cache instead of making an actual request to the server every time.
Layered means that the entire system architecture can be split or decoupled into multiple layers and you should be able to add or remove
a layer at any time. The following diagram will make this layering more understandable. Layers of a RESTful API system could include a
Firewall Load balancer, a Web server, and a Database. Let's move on to the constraint of having a uniform interface. This may sound a little
confusing at this point, but it means that the system should offer a uniform communication system to access the resources. For example,
there should be unique URLs for each resource. There should also be a unified way to modify or proceed further with a resource from the
API result or representation in a standard XML or Jason format. Lastly, code on demand means that the API may deliver some business logic
or code that the client can run to further improve the response result. To understand this code-on-demand feature, consider the following
script tag that loads some JavaScript code from an API endpoint of the Little Lemon Restaurant. Once loaded this script can display any
special menu items for that day. For now, these six constraints are just theoretical. Do not let them confuse you once you start developing
your APIs these terms will become clear to you. Next, let's focus on Resources. Resources are a core part of every REST API. So, it's important
for you to become familiar with how APIs present Resources. Say the Little Lemon Restaurant has a mobile App which can be used by customers and managers.
Managers can use the App to get information about orders and customers while the customers use this App to browse the menu and place orders.
To support this, the App uses different APIs to fetch data from the server and in each case, the resource type will be different. Let's explore
a few examples. If a manager wants to see all orders, the App makes a call to the API little dot lemon forward slash orders and displays the result.
The resource type in this case is a list of order objects. If a manager wants to view more specific information about a particular order, say the
order with the ID 16, the App makes a call to the API little dot lemon forward slash orders forward slash 16. The resource type is the order object.
To see who placed the order, the App makes an API call with an extra filter forward slash customer. This retrieves all the details about the customer
of that order. The resource type in this case is the customer object. Say the manager wants to look at what the menu items of order number 16 were,
the App makes an API call that replaces forward slash customer with forward slash menu items. Only the menu items of order 16 will show on the result
and this time the resource type is the menu item object. Now on the other hand, if the customer wants to browse the menu, the App uses another API,
little dot lemon forward slash menu items. And although the resource type will also be the menu items object, the return will be all available menu
items of the restaurant. But sometimes the resource type is the same although the result can be filtered to be more specific. Let's explore a final API
to unpack this. This time the customer wants to browse food items from a specific category say appetizers, the App will add question mark category equal
sign appetizers. Notice that the endpoint is the same as the previous API but it filters the output to only appetizers. For both cases, however, the resources
still menu item object. Now that you've explored a few examples of API resources, let's revisit the REST API Constraint of Statelessness. You need to keep in
mind that the server always represents only what you ask for. It does not remember anything of what happened before. For instance, if the manager retrieves the
information about order 16 and then wants to look at the menu items of order 16, you cannot just send a follow-up HTTP request to the endpoint forward slash menu
items because this API will return all menu items and not just the menu items of order 16. The server does not remember that your earlier call was for a specific
order. If you want to get the menu items for a specific order number, you need to explicitly supply that order number to the server as orders forward slash 16
forward slash menu items. In simple terms, this is what Stateless means. The server cannot recognize the client automatically. API calls must include more
information about the user but you will learn more about this later in the course. In this video, you have learned how to create REST APIs by following some
key constraints. You also learned about the core parts of REST APIs like the Resource types. These conventions will help you build APIs that are easy to use
and maintain. But there is a lot more to learn on how to optimize your APIs for instance, using the correct naming convention, but more on this in an upcoming video.

# Security and Authentication in RESTapi

By now you should know the best practices for developing APIs. But there is another important aspect of APIs to consider, security. The core purpose of APIs is to make your data more accessible. Not just for your apps and websites but also for third party clients. This way your data becomes even more useful. But don't forget, because APIs are publicly available, they may pose a risk to your back-end services. Essentially, APIs give third party apps access to your server and database. That is why it is crucial to secure APIs. This video covers how to keep your API safe and secure. And you'll learn about various security concepts and how to implement them in your own APIs. First up is SSL, or `Secure Socket Layer.`

#### SSL encrypts

your data and protect your data when it leaves your browser and the web server. When you set up the SSL certificates properly your APIs can be served over HTTPS. The frontend and mobile application team that works on the Little Lemon project, want to ensure that the data is transported securely. So, the API team has used SSL certificates from a reputed provider and installed them. Now all the API endpoints are secured and serve data over HTTPS instead of HTTP. That's why it's important to always check that the endpoint of your APIs starts with HTTPS instead of HTTP. Next is signed URLs. The little Lemon Project team wants to ensure that the API calls are coming to it from their mobile application and their website only. This is where signed URLs come in.

#### Signed URLs

give a client application limited access to a specific resource for a brief period of time. With a signed URL, every time an API is called, a particular piece of text called a signature is included with the URL. Server side code can verify the signature and ensure that the call comes from an authentic source. But how do developers create these signatures? `HMAC` is a popular signing mechanism used by modern applications. It is easy to use and ensures the authenticity and integrity of the message. For example, some secret message, encoded by a digest algorithm with a secret key, some secret key creates this HMAC signature. Next, let's discuss
authentication. All of us are familiar with the user names and password based authentication, but sending a user name and passwords to every API call is frustrating and it's not secure. So, the Little Lemon team prefers using token based authentication over HTTP based authentication when securing its API. Because basic authentication requires users to send their user name and password in every call.

#### token-based authentication,

With `t-b-a` the user sends their user name and password to the sign in URL, and then receives a unique token in text form. After that, every API call will include this token as a HTTP header. The server side code can check the token, extract the information hidden in it and match it with an existing user. After this verification, the rest of the work is performed on behalf of that matching user. To create this token, you can use an ad hoc policy from the backend framework we're using, or you can use something more industry standard, like JSON Web Token or JWT. You will learn more about this later in the course.

- Next, you need to know that there are a couple of **popular HTTP codes involved during the authentication process**, that you should be aware of. `401 means unauthorized`. In this context, unauthorized means the user name and password don't match. So the server cannot continue further. And then there is `403, which means forbidden`. This is an interesting code, and it means that your credentials are valid and you have successfully identified yourself, but you don't have the authority to perform the action. Last is the `cross origin resource sharing or CORS` policy and firewalls. When you design an API, you can accept calls from everywhere, or by configuring the cores headers, you can only accept calls from some specific domains. And finally, another security measure that you can use is `firewalls`. If you want to ensure that only specific IP addresses can access your API, you can use a firewall application on your server. In this video, you have learned how to protect your APIs. Security is an important consideration when designing APIs, and you are now better positioned to protect your infrastructure and keep your user data safe and secure.

# Access Control

The Little Lemon API provides a variety of API which allow you to view the details of an order. The output of these API may contain sensitive data such as customers delivery addresses which should not be visible to the public. Only manager or delivery crew accounts should be able to access these APIs and anyone else who tries to access them should be denied. This is where access control comes in handy in an API project, with access control you can specify which users are allowed to access your API. And what data they can see, that way you can be sure that only the people who are supposed to manage your data can access it. In this video you will learn about controlling access to your APIs. Roles and privileges are the building blocks of designing and access control system.
_A role is a collection of privileges and a privilege is if you are allowed to do a particular task._ If you consider the customer role in the restaurant project, it is made of the following privileges. Customers can browse menu items, add menu items to the cart, place orders, add food reviews and browse their own orders. On the other hand, someone with a manager role will be able to do the following, add menu items, edit menu items, delete menu items and browse all orders. Managers can also browse customer data, assign orders to the delivery crew and browse transaction data. And the delivery crew will only be able to perform the following tasks, browse orders that are assigned to them and update the status of an assigned order. There can be several roles like these in your project, for example, administrators, senior managers, HR accounts and so on. Each role has a collection of carefully thought out privileges, the more detailed and specific these privileges are the better the access control system you can design for your API project. You have probably heard about the term authorization before, it is just another word for access control. Keep in mind that authentication and authorization are two different things. Authentication gets you in and authorization allows you to do something after authentication or prevents you from doing it. In a real life project, a user can perform multiple tasks from different roles. For example the general manager of the Little Lemon restaurant should be able to perform everything an accountant, HR representative and a normal manager can. So how can you deal with such issues while designing the API. You can create one role and assign all the essential privileges to it. So a manager will have all the privileges and accountant as, then you can update or edit these privileges from time to time as needed. This makes it easy to keep your rolls up to date and tailored to your needs. The second approach is that one user can have multiple roles, task specific roles make it easy to assign the right privileges to the right people. So your accountants will only have access to accounting features while your HR team will only have access to HR management features. And there's also a manager specific role with relevant privileges, this way you can assign all three roles to the general manager and they will be able to perform every task an accountant HR and a manager can do. And if you assign a new privilege to the accountant role, the general manager will automatically have that privilege added to their role. API design is not complete without effective access control by taking the proper time to design and plan out your privileges and roles. You make life easier for developers and avoid costly debugging and refactoring down the road. A well designed API access control system is an asset for the whole project, it saves time and money in the long run.
