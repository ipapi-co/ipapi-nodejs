
'use strict';

var https = require('https');

var API_KEY = '';

var headers   = {'user-agent': 'ipapi/ipapi-nodejs/0.3.0'};

var fieldList = ['ip', 'city', 'region', 'country', 'postal', 
                  'latitude', 'longitude', 'timezone', 'latlong'];


var _request = function(path, callback, isJson){
    var options = {
        host: 'ipapi.co',
        path: path,
        headers: headers
    };

    var req = https.get(options, function(resp){
        var body = ''

        resp.on('data', function(data){
            body += data;
        });

        resp.on('end', function(){
            if (isJson) {
                var loc = JSON.parse(body);            
                callback(loc);
            } else {
                var loc = body;
                callback(loc);
            }
        });
    });

    req.on('error', function(e) {
      callback(new Error(e));
    });
};


var location = function(callback, ip, key, field){
    var path;
    var isField = false;

    if (typeof callback !== 'function') {
        return 'Callback function is required';
    }

    if ((typeof field !== 'undefined') && (field !== '')) {
        if (fieldList.indexOf(field) === -1) {
            return 'Invalid field'
        } else {
            isField = true;
        }
    }

    if (isField) {
        if (typeof ip !== 'undefined') {
            path = '/' + ip + '/' + field + '/';
        } else {
            path = '/' + field + '/';
        }
    } else {
        if (typeof ip !== 'undefined') {
            path = '/' + ip + '/json/';
        } else {
            path = '/json/';
        }        
    }

    if ((typeof key !== 'undefined') && (key !== '')){
        path = path + '?access_key=' + key;
    } else {
        if (API_KEY !== ''){
            path = path + '?access_key=' + API_KEY;
        } 
    }

    _request(path, callback, (!isField))
};


/**
 * Query location for an IP address
 */
module.exports = {
    location : location,
};
