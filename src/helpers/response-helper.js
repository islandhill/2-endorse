'use strict';

function respond(text, subText1) {
  return {
    text: text,
    attachments: [
      {
        text: subText1
      }
    ]
  };
}

module.exports = respond;
