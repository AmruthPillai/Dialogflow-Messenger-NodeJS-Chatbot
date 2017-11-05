const PIXABAY_API_KEY = '<pixabay-api-key>';

const request = require('request');

module.exports = (req, res) => {
  if (req.body.result.action === 'image') {
    const imageName = req.body.result.parameters['image_name'];
    const PIXABAY_API_URL = 'https://pixabay.com/api?key=' + PIXABAY_API_KEY + '&q=' + imageName;

    request({
      uri: PIXABAY_API_URL,
      methos: 'GET',
      headers: { 'Api-Key': PIXABAY_API_KEY }
    }, (err, response, body) => {
      const imageUri = JSON.parse(body).hits[0].webformatURL;

      return res.json({
        speech: imageUri,
        displayText: imageUri,
        source: 'image_name'
      });
    })
  }
}
