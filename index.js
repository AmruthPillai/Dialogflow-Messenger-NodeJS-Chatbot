// Requirements
const express     = require('express');
const bodyParser  = require('body-parser');
const app         = express();

// Variables
const port        = process.env.PORT || 5000;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({'extended':'true'}));

// Parse application/json
app.use(bodyParser.json());

// Parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Routes
require('./routes.js')(app);

app.listen(port, () => console.log('Webhook server is listening on port ' + port));
