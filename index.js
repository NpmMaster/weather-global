const request = require('request')


class Weather {
    constructor(location, realtime=null, json=null) {
        this._json=json
        this._realtime=realtime
        this._location=location
        if (this.realtime) {
            request(`https://api.tomorrow.io/v4/weather/realtime?location=${this._location}&apikey=45jvME0M8eKBgYQLcun0SBTzROHUpjhU`, (error,response,body) => {
                if (error) {
                    console.error(error)
                }
                console.log('Status: ', response.statusCode, response.statusMessage)
                console.log('body: ', body)
            }) 
        } else if (this._json == null && realtime==null){
            request(`https://api.tomorrow.io/v4/weather/forecast?location=${this._location}.0466&apikey=45jvME0M8eKBgYQLcun0SBTzROHUpjhU`, (error,response,body) => {
                if (error) {
                    console.error(error)
                }
                console.log('Status: ', response.statusCode, response.statusMessage)
                console.log('body: ', JSON.stringify(body))
            }) 
        } else if (this._json == true && !realtime == null) {
            request(`https://api.tomorrow.io/v4/weather/realtime?location=${this._location}&apikey=45jvME0M8eKBgYQLcun0SBTzROHUpjhU`, (error,response,body) => {
                if (error) {
                    console.error(error)
                }
                console.log('Status: ', response.statusCode, response.statusMessage)
                console.log('body: ', body)
            }) 
        } else if (this._json == true && realtime == null){
            request(`https://api.tomorrow.io/v4/weather/forecast?location=${this._location}.0466&apikey=45jvME0M8eKBgYQLcun0SBTzROHUpjhU`, (error,response,body) => {
                if (error) {
                    console.error(error)
                }
                console.log('Status: ', response.statusCode, response.statusMessage)
                console.log('body: ', body)
            }) 
        } else if (realtime == null) {
            request(`https://api.tomorrow.io/v4/weather/forecast?location=${this._location}.0466&apikey=45jvME0M8eKBgYQLcun0SBTzROHUpjhU`, (error,response,body) => {
                if (error) {
                    console.error(error)
                }
                console.log('Status: ', response.statusCode, response.statusMessage)
                console.log('body: ', body)
            }) 
        } else if (this._json == true) {
            request(`https://api.tomorrow.io/v4/weather/forecast?location=${this._location}.0466&apikey=45jvME0M8eKBgYQLcun0SBTzROHUpjhU`, (error,response,body) => {
                if (error) {
                    console.error(error)
                }
                console.log('Status: ', response.statusCode, response.statusMessage)
                console.log('body: ', body)
            }) 
        } else if (this._json == null) {
            request(`https://api.tomorrow.io/v4/weather/forecast?location=${this._location}.0466&apikey=45jvME0M8eKBgYQLcun0SBTzROHUpjhU`, (error,response,body) => {
                if (error) {
                    console.error(error)
                }
                console.log('Status: ', response.statusCode, response.statusMessage)
                console.log('body: ', JSON.stringify(body))
            }) 
        }
    } 
}
//https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=45jvME0M8eKBgYQLcun0SBTzROHUpjhU'
//https://api.tomorrow.io/v4/weather/realtime?location=toronto&apikey=45jvME0M8eKBgYQLcun0SBTzROHUpjhU

module.exports = {
    Weather
}