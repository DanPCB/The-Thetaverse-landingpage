exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }
  
  try {
    const { name, email, phone } = JSON.parse(event.body);
    if (!name || !email || !phone) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Name, email, and phone are required' }),
      };
    }
    
    console.log(`New subscription: ${name}, ${email}, ${phone}`);
    
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
