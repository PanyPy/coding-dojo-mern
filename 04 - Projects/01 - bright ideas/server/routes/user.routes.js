const UserController = require('../controllers/user.controller');
const { authenticate } = require('../config/jwt.config');

module.exports = app => {
  app.post("/api/register", UserController.register);
  app.post("/api/login", UserController.login);
  app.post('/api/logout', UserController.logout);
  app.get('/api/users/:id', authenticate, UserController.getUser); 
  app.put('/api/users/:id', authenticate, UserController.updateUser);
}