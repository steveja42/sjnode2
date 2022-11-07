export const handler = async event => {
    const subject = event.queryStringParameters.name || 'JS World'
    console.log(`Hello ${subject}!`)
    return {
      statusCode: 200,
      body: JSON.stringify({message:`Hello ${subject}!`}),
    }
  }