const FB_PAGE_ACCESS_TOKEN = 'EAAV6mdU1ZAB4BAIQNBeIyiCf9yXVKGskSL9QHwtWkZBSRQgXmgU3cJ0ZCjifRyQ5WZAvUpiEmXf5KZBsXg3XANAWdAS6Xx1wfZC7ZBP3ivCT9Cqhzz4g7pFMvRqCwOCy4mmRksC4mm2ZA2m98rfJrT42gLyPA3LpRWh5oLOfPZC2DwXq9fu5rfn5V';
const CAT_IMAGE_URL = 'https://botcube.co/public/blog/apiai-tutorial-bot/hosico_cat.jpg';

const request = require('request');

module.exports = (event) => {
    const senderId = event.sender.id;
    const message = event.message.text;

    request({
        url: 'https://graph.facebook.com/v2.6/me/messages',
        qs: { access_token: FB_PAGE_ACCESS_TOKEN },
        method: 'POST',
        json: {
            recipient: { id: senderId },
            message: {
                attachment: {
                    type: 'image',
                    payload: { url: CAT_IMAGE_URL}
                }
            }
        }
    });
};
