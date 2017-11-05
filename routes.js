const verificationController = require('./controllers/verification');
const messageWebhookController = require('./controllers/messageWebhook');

module.exports = function(app) {
  app.get('/', verificationController);
  app.post('/', messageWebhookController);
}
