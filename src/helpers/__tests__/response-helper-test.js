'use strict';
const respond = require('../response-helper');
test('response payload should have Slack message formatting', () => {
  let text, subText1 = {text: 'Howdy', subText1: 'It is Sunny now.'};
  const expectedJson = {
    text: text,
    attachments: [{
      text: subText1
    }]
  };
  expect(respond(text, subText1)) === expectedJson;
});


