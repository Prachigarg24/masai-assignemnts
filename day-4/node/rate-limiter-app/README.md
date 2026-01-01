Day 4: CORS & API Security
1. What is CORS? Why does it exist?

CORS (Cross-Origin Resource Sharing) is a browser security mechanism that controls how resources on a web server can be requested from another origin (domain, protocol, or port).
It exists to prevent malicious websites from accessing sensitive data from another site without permission.

2. Explain the Same-Origin Policy.

The Same-Origin Policy is a browser security rule that allows a web page to access data only from the same origin (same protocol, domain, and port).
It prevents attacks like data theft and unauthorized API access.

3. What are preflight requests? When do they occur?

Preflight requests are OPTIONS requests sent by the browser before the actual request.
They occur when:

Request uses methods other than GET/POST

Custom headers are used

Content-Type is not application/json

The browser checks whether the server allows the request.

4. How do you configure CORS in Express?

By using the cors middleware.

const cors = require("cors");
app.use(cors());


You can also configure allowed origins, methods, and headers.

5. What is CSRF (Cross-Site Request Forgery)? How do you prevent it?

CSRF is an attack where a malicious site tricks a logged-in user into making unwanted requests.

Prevention:

CSRF tokens

SameSite cookies

Checking origin and referer headers

6. What is XSS (Cross-Site Scripting)? How do you prevent it?

XSS occurs when malicious scripts are injected into a webpage.

Prevention:

Input validation and sanitization

Escaping HTML

Using HTTP-only cookies

Content Security Policy (CSP)

7. What is SQL Injection? How do you prevent it?

SQL Injection is an attack where malicious SQL queries are injected through user input.

Prevention:

Use prepared statements

Parameterized queries

ORM libraries

Input validation

8. What are rate limiting and throttling? Why are they important?

Rate limiting restricts the number of requests a user can make in a given time.
Throttling slows down responses after a limit.

They prevent:

Brute-force attacks

DDoS attacks

Server overload

9. What is the principle of least privilege?

It means giving users or systems only the minimum permissions required to perform their tasks.
This reduces security risks if access is compromised.