'use strict';

module.exports.helloHandler = (event, context, callback) => {
  var response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hey Serverless!',
      input: event,
    }),
  };

  printContext(context);
  callback(null, response);

};

function printContext(context) {
  if (context) {
    console.log('remaining time =', context.getRemainingTimeInMillis());
    console.log('functionName =', context.functionName);
    console.log('AWSrequestID =', context.awsRequestId);
    console.log('logGroupName =', context.logGroupName);
    console.log('logStreamName =', context.logStreamName);
    console.log('clientContext =', context.clientContext);
  }
}
