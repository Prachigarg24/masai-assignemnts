1. What is HTTPS? How does it differ from HTTP?

HTTPS (HyperText Transfer Protocol Secure) is the secure version of HTTP.
It uses SSL/TLS encryption to protect the data transmitted between client and server.

Differences between HTTP and HTTPS:

HTTP → Data is sent in plain text, vulnerable to interception

HTTPS → Data is encrypted, secure from attackers

HTTP → Default port 80

HTTPS → Default port 443

2. Explain SSL/TLS. What is the SSL handshake process?

SSL (Secure Sockets Layer) and TLS (Transport Layer Security) are protocols used to encrypt communication between client and server.

SSL/TLS Handshake Process:

Client sends a request for a secure connection to the server.

Server sends its SSL certificate to the client.

Client verifies the certificate with a trusted Certificate Authority (CA).

Client and server agree on a shared encryption key.

Secure encrypted communication begins.

3. What is encryption? Explain symmetric vs asymmetric encryption.

Encryption is the process of converting readable data into an unreadable format to protect it from unauthorized access.

Symmetric Encryption:

Same key is used to encrypt and decrypt data

Fast and efficient

Example: AES

Asymmetric Encryption:

Uses a public key to encrypt and a private key to decrypt

More secure, supports digital signatures

Example: RSA

4. What are certificates? What is a Certificate Authority (CA)?

Certificates are digital documents that verify the identity of a server or organization.
They are used to establish trust in secure communication.

Certificate Authority (CA):

A trusted third-party organization that issues SSL/TLS certificates

Examples: DigiCert, Let's Encrypt, GlobalSign

5. What is the difference between authentication and authorization?

Authentication → Verifies who the user is (login with username/password)

Authorization → Determines what the user is allowed to do (access control, permissions)

Example:

Logging in → Authentication

Accessing admin dashboard → Authorization

6. Explain session-based authentication. How do sessions work?

Session-based authentication stores user login state on the server.

How it works:

User logs in with username and password.

Server creates a session and generates a session ID.

Session ID is sent to the client as a cookie.

On each request, the client sends the session ID.

Server validates the session ID and allows access to protected resources.

7. What are cookies? What are the security attributes of cookies (HttpOnly, Secure, SameSite)?

Cookies are small pieces of data stored on the client browser by the server.

Security attributes:

HttpOnly → Cannot be accessed by JavaScript, protects against XSS

Secure → Only sent over HTTPS connections

SameSite → Controls cross-site requests, protects against CSRF

8. What is token-based authentication? How does it differ from session-based auth?

Token-based authentication uses a signed token (e.g., JWT) stored on the client to prove identity.

Differences from session-based:

Feature	Session-based	Token-based
Storage	Server stores sessions	Client stores token
State	Stateful	Stateless
Scalability	Harder to scale	Easy to scale
Cross-domain	Requires additional config	Works easily across domains