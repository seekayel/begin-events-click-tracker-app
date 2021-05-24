const arc = require('@architect/functions')

exports.handler = async function http (req) {
  const name = 'my-event'
  const payload = arc.http.helpers.bodyParser(req)
  await arc.events.publish({ name, payload, "now": Date.now() })
  console.log('payload: '+payload)
  return {
    statusCode: 302,
    headers: {
      location: '/?at='+Date.now()
    }
  }
}
