const { ArduinoIoTCloud } = require('arduino-iot-js');

const clientId = '<CLIENT_ID>';
const clientSecret = '<CLIENT_SECRET>';
const thingId = '<THING_ID>';

(async () => {
  const client = await ArduinoIoTCloud.connect({
    clientId,
    clientSecret,
    // apiUrl, // enable for dev environment
    // host, // enable for dev environment
    onDisconnect: (message) => {
      console.error(message);
    },
    onConnected: () => {
      console.log('connected');
    }
  });
  
  let count = 1;
  let status = false;

  // Updates a variable called 'counter' every x milliseconds
  setInterval(() => {
    count = count + 1; 
    let property = 'counter'
    let value = count
    console.log('sending ' + property + ': ' + value)
    client.sendProperty(thingId, property, value, new Date().getTime());
  }, 4500)

  // Updates a variable called 'led' every x milliseconds
  setInterval(() => {
    status = !status;
    let property = 'led'
    let value = !!status
    console.log('sending ' + property + ': ' + value)
    client.sendProperty(thingId, property, value, new Date().getTime());
  }, 4100)

})();
