const arc = require('@architect/functions')

exports.handler = async function http (req) {
  const name = 'my-event'
  const payload = arc.http.helpers.bodyParser(req)
  payload['now'] = Date.now()
  await arc.events.publish({ name, payload })
  console.log('payload: '+JSON.stringify(payload,null,2))
  return {
    statusCode: 302,
    headers: {
      location: '/?at='+Date.now()
    }
  }
}
