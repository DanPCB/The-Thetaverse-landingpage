
exports.handler = async (event, context) => {
  // Allow only POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  try {
    // Parse the request body (expecting JSON with an "email" field)
    const { email } = JSON.parse(event.body);
    if (!email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Email is required' }),
      };
    }

    // Here, you could add code to store the email in a database,
    // send a confirmation email, or integrate with an email marketing service.
    // For now, we simply log the email to the console.
    console.log(`New subscription: ${email}`);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Subscription successful!' }),
    };
  } catch (error) {
    console.error('Error processing subscription', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
