# Day 1: HTTP Fundamentals & REST APIs

## 1. What is HTTP and how does it work?

HTTP (HyperText Transfer Protocol) is an application-layer protocol used for communication between a client and a server over the web.

### Request–Response Cycle:

1. Client sends an HTTP request to the server
2. Server processes the request
3. Server sends an HTTP response
4. Client receives and renders the response

HTTP follows a stateless request-response model.

---

## 2. HTTP Methods and Their Usage

* **GET**: Retrieve data from the server
* **POST**: Send data to the server to create a resource
* **PUT**: Update an entire resource
* **PATCH**: Partially update a resource
* **DELETE**: Remove a resource

---

## 3. HTTP Status Codes

* **2xx (Success)**: Request was successful
  Example: 200 OK, 201 Created
* **3xx (Redirection)**: Resource moved
  Example: 301 Moved Permanently
* **4xx (Client Error)**: Invalid request
  Example: 400 Bad Request, 404 Not Found
* **5xx (Server Error)**: Server failure
  Example: 500 Internal Server Error

---

## 4. HTTP Headers

Headers provide metadata about the request or response.

### Common Request Headers:

* Content-Type
* Authorization
* Accept

### Common Response Headers:

* Content-Type
* Cache-Control
* Set-Cookie

---

## 5. Stateless vs Stateful Protocols

* **Stateless**: Server does not store client state
* **Stateful**: Server remembers client state

HTTP is a **stateless protocol**.

---

## 6. Idempotency in REST APIs

An operation is idempotent if multiple identical requests produce the same result.

### Idempotent Methods:

* GET
* PUT
* DELETE

### Non-idempotent:

* POST

---

## 7. What is REST?

REST (Representational State Transfer) is an architectural style for designing APIs.

### REST Principles:

* Statelessness
* Client-server separation
* Resource-based URLs
* Use of HTTP methods
* Uniform interface

---

## 8. API Versioning

### Common Approaches:

* URL versioning: `/api/v1/tasks`
* Header versioning
* Query parameter versioning

URL versioning is the most common and simplest approach.

---

## Conclusion

HTTP and REST form the foundation of modern web communication, enabling scalable and maintainable APIs.
