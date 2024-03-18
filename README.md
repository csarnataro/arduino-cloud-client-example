# Arduino Cloud Client Example

A simple script to send data to Arduino Cloud 
using the `arduino-iot-js` library.

Inspired from the original README file in https://github.com/arduino/arduino-iot-js,
but tested with the latest version of the library.

See notes below to use it in development environment (only for Arduino employees)
This script covers only the `sendProperty` part, not the `onPropertyValue` callbacks.

## Prerequisites
- An Arduino Cloud account
- API Key & API secret, generated from https://app.arduino.cc
- A Thing with some variables and an ID

## How to use
- Clone this repo
- launch `npm install`
- Replace the API Key, Secret and ThingId in the script `index.js`
- launch `node index.js` (tested with Node 18)


## Access to development environment
A couple of additional info are required to use this script on the Arduino dev environment (available
only to Arduino employess)
- API Key & Secret must be generated from the dev environment
- The `host` option must be configured to point to dev environment
- The `apiUrl` option must be configured to point to dev environment

