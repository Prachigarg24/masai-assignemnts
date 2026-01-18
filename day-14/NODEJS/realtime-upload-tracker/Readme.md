# Day 14: Real-time Communication & WebSockets

## 1. Difference between HTTP and WebSocket

HTTP is a stateless, request-response protocol where the client must initiate every request and the server responds once per request. WebSocket is a stateful, full-duplex protocol that maintains a persistent connection, allowing both client and server to send data anytime.

**Key Differences:**

* HTTP: One-way, short-lived connection
* WebSocket: Two-way, persistent connection
* HTTP has higher latency for real-time use cases

---

## 2. When to use WebSockets over HTTP

WebSockets are used when real-time, low-latency communication is required, such as:

* Chat applications
* Live notifications
* Online gaming
* Real-time dashboards
* File upload progress tracking

---

## 3. WebSocket Connection & Handshake

WebSocket starts as an HTTP request.

1. Client sends an HTTP request with `Upgrade: websocket` header
2. Server responds with `101 Switching Protocols`
3. Connection upgrades to WebSocket
4. Persistent, bidirectional communication begins

---

## 4. What is Socket.io? Difference from WebSocket

Socket.io is a library built on top of WebSockets that provides:

* Auto-reconnection
* Fallbacks (polling if WebSocket fails)
* Rooms & namespaces
* Built-in events

Native WebSocket is low-level and lacks these features.

---

## 5. Rooms and Namespaces in Socket.io

* **Namespaces**: Logical separation of connections (e.g. `/chat`, `/admin`)
* **Rooms**: Groups inside a namespace for broadcasting messages to specific users

---

## 6. Authentication with WebSockets

Authentication can be handled by:

* Sending JWT token during connection
* Validating token in Socket.io middleware
* Storing authenticated user info on socket object

---

## 7. Challenges in Scaling WebSocket Applications

* Maintaining persistent connections
* Load balancing (sticky sessions)
* Memory consumption
* Horizontal scaling
* Message synchronization across servers

Solutions include Redis adapters and message brokers.

---

## 8. Server-Sent Events (SSE)

SSE allows the server to push updates to the client over HTTP.

* One-way (server → client)
* Uses HTTP
* Simpler than WebSocket
* Not suitable for two-way communication

---

## 9. Long Polling

Long polling keeps an HTTP request open until data is available.

* Client sends request
* Server responds only when data is ready
* Client immediately sends another request

Used before WebSockets existed.

---

## 10. Real-time Notification System

Implementation approach:

* Use WebSocket or Socket.io
* Maintain user connections
* Emit events on data changes
* Use rooms for user-specific notifications
* Scale using Redis pub/sub

---

## Conclusion

WebSockets and Socket.io are essential for modern real-time applications, providing efficient and scalable communication compared to traditional HTTP.
