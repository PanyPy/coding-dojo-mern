const PlayerController = require('../controllers/player.controller');
const { authenticate } = require('../config/jwt.config');

module.exports = (app) => {
    app.get('/api/players', authenticate, PlayerController.getAllPlayers);
    app.get('/api/players/:id', PlayerController.getPlayer);
    app.put('/api/players/:id', PlayerController.updatePlayer);
    app.post('/api/player', PlayerController.createPlayer);
    app.delete('/api/player/:id', PlayerController.deletePlayer);

}
