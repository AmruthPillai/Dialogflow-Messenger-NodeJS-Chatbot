const verificationController    = require('./controllers/verification');
const messageWebhookController  = require('./controllers/messageWebhook');
const imageSearchController     = require('./controllers/imageSearch');

module.exports = function(app) {
  app.get('/', verificationController);
  app.post('/', messageWebhookController);
  app.post('/image-search', imageSearchController);
}
