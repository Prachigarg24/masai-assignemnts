 Express.js Deep Dive
1. What is Express.js? Why use it over plain Node.js?
Express.js is a lightweight web framework built on top of Node.js that simplifies building web servers and APIs.
Why Express over Node.js?
Simplifies routing
Built-in middleware support
Cleaner request/response handling
Faster development
Widely used & production-tested
Node.js gives low-level APIs, Express provides abstraction and structure.
2. What is middleware in Express? Explain middleware chain.
Middleware is a function that has access to req, res, and next().
Middleware chain flow:
Request → Middleware 1 → Middleware 2 → Route → Response
Each middleware decides whether to:
Modify request/response
Pass control using next()
End the request
3. Types of Middleware in Express
Application-level
app.use(middleware)
Router-level
router.use(middleware)
Error-handling
app.use((err, req, res, next) => {})
Built-in
express.json()
express.static()
Third-party
morgan
cors
4. How does error handling work in Express?
Errors are passed using next(error)
Error middleware has 4 parameters
(err, req, res, next)
Express automatically skips normal middleware and jumps to error middleware.
5. Difference between app.use() and app.all()
app.use()	app.all()
Works for all HTTP methods	Matches all HTTP methods
Used for middleware	Used for routes
Path optional	Path required
6. Routing in Express & Route Parameters
Routing maps HTTP requests to handlers.
app.get('/users/:id', (req, res) => {
  res.send(req.params.id);
});
req.params captures dynamic values from URL.
7. Route Handlers vs Middleware
Route Handler	Middleware
Ends request	Pre-process request
Sends response	Calls next()
Specific route	Reusable
8. How do you handle file uploads in Express?
Using multer
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('file'), (req, res) => {
  res.send('File uploaded');
});
9. What is morgan? Logging strategies?
Morgan is an HTTP request logger.
Strategies:
Development: morgan('dev')
Production: log to file
Errors only
Centralized logging (ELK stack)
10. How would you structure a large Express app?
src/
 ├── controllers/
 ├── routes/
 ├── middlewares/
 ├── services/
 ├── models/
 ├── utils/
 └── app.js
Separation of concerns = scalable backend