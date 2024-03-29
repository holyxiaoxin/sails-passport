module.exports = function(req, res, next) {
  // User is allowed, proceed to the next policy, 
  // or if this is the last policy, the controller
  if (req.user) {
    return next();
  }
  // User is not allowed
  // (default res.forbidden() behavior can be overridden in `config/403.js`)
  res.redirect('/login');
//   return res.forbidden('You are not permitted to perform this action.');
};