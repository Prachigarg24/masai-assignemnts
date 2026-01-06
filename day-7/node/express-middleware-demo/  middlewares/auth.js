module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return next(new Error("Unauthorized"));
  }

  next();
};
