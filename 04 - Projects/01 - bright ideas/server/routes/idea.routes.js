const IdeaController = require('../controllers/idea.controller');
const { authenticate } = require('../config/jwt.config');

module.exports = app => {
  app.get('/api/ideas', authenticate, IdeaController.getAllIdeas);
  app.get('/api/ideas/:id', authenticate, IdeaController.getIdea);
  app.post('/api/idea', authenticate, IdeaController.createIdea);
  app.delete('/api/ideas/:id', authenticate, IdeaController.deleteIdea);
  app.put('/api/ideas/:id', authenticate, IdeaController.updateIdea);
}