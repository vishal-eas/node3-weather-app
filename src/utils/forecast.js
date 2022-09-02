const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=a1211f90c1bd03e05edf2bc61f118127&query='+encodeURIComponent(latitude)+','+encodeURIComponent(longitude)+"&units=f"

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.temperature + ' It is currently ' )
        }
    })
}

module.exports = forecast