const DIALOGFLOW_CLIENT_ACCESS_TOKEN =  '<dialogflow-client-access-token>';
const FB_PAGE_ACCESS_TOKEN = '<facebook-page-access-token>';

const request = require('request');
const dialogflowClient = require('apiai')(DIALOGFLOW_CLIENT_ACCESS_TOKEN);

const sendImage = (senderId, imageUri) => {
  return request({
    url: 'https://graph.facebook.com/v2.6/me/messages',
    qs: { access_token: FB_PAGE_ACCESS_TOKEN },
    method: 'POST',
    json: {
      recipient: { id: senderId },
      message: {
        attachment: {
          type: 'image',
          payload: { url: imageUri }
        }
      }
    }
  });
};

const sendTextMessage = (senderId, text) => {
  request({
    url: 'https://graph.facebook.com/v2.6/me/messages',
    qs: { access_token: FB_PAGE_ACCESS_TOKEN },
    method: 'POST',
    json: {
      recipient: { id: senderId },
      message: { text },
    }
  });
};

module.exports = (event) => {
    const senderId = event.sender.id;
    const message = event.message.text;

    const dialogflowSession = dialogflowClient.textRequest(message, {sessionId: 'dialogflow_messenger_nodejs_chatbot'});

    dialogflowSession.on('response', (response) => {
      const result = response.result.fulfillment.speech;

      console.log(response.result);

      if (response.result.metadata.intentName === 'images.search') {
        sendImage(senderId, result);
      } else {
        sendTextMessage(senderId, result);
      }
    });

    dialogflowSession.on('error', error => console.log(error));
    dialogflowSession.end();
};
