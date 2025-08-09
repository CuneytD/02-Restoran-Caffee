// middleware/auth.js
module.exports = function authMiddleware(req, res, next) {
  if (!req.session || !req.session.userId) {
    return res.redirect('/login');
  }
  next();
};