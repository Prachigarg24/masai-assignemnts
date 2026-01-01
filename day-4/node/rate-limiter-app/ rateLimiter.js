const rateLimitMap = new Map();

const RATE_LIMIT = 10; // requests
const WINDOW_TIME = 60 * 1000; // 1 minute

function rateLimiter(req, res, next) {
  const ip = req.ip;
  const currentTime = Date.now();

  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, { count: 1, startTime: currentTime });
    return next();
  }

  const userData = rateLimitMap.get(ip);

  if (currentTime - userData.startTime > WINDOW_TIME) {
    rateLimitMap.set(ip, { count: 1, startTime: currentTime });
    return next();
  }

  if (userData.count >= RATE_LIMIT) {
    return res.status(429).json({
      error: "Too many requests. Please try again later.",
    });
  }

  userData.count += 1;
  rateLimitMap.set(ip, userData);
  next();
}

module.exports = rateLimiter;
