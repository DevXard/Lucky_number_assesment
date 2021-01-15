### Conceptual Exercise

Answer the following questions below:

- What is RESTful routing?
> Restful routing is when you create your routes so that each rout does a specific action
> you got GET  for geting data DELETE for deleating PUT/PATCH for updating and POST for creating
- What is a resource?
> resorce is data you can show or send as JSON or other format
- When building a JSON API why do you not include routes to render a form that when submitted creates a new user?
> API is a way to comunicate with your resorces and database we dont need forms we can just send POST or PUT/PATCH requests
> to Create or Update what ever we need.
- What does idempotent mean? Which HTTP verbs are idempotent?
> making the same request have the same effect as making a single request
> idempotent are DELETE and PUT
- What is the difference between PUT and PATCH?
> PUT Will Update  the entire column in a database where Patch is supos to updata only the part you whant
- What is one way encryption?
> bycript
- What is the purpose of a `salt` when hashing a password?
> slant gives the encription randomnes
- What is the purpose of the Bcrypt module?
> to create an encripted password and to authentificate a password
- What is the difference between authorization and authentication?
> authorization will tell if you have the permision to do something and 
> authentication will check if you are who you say you are
