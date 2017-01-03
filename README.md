
# Node.js + ipapi (IP address location API)

## Usage

### From Node.js REPL

```
var ipapi = require('./ipapi.js');

var callback = function(res){
    console.log(res);
};

ipapi.location(callback)       // Complete location for your IP address
> { 
    ip: '50.1.2.3',
    city: 'Wilton',
    region: 'California',
    country: 'US',
    postal: 95693,
    latitude: 38.3926,
    longitude: -121.2429,
    timezone: 'America/Los_Angeles' 
  }


ipapi.location(callback, '', '', 'ip')         // Your external IP address
50.1.2.3

ipapi.location(callback, '', '', 'city')       // Your city
Wilton

ipapi.location(callback, '', '', 'country')    // Your country
US

ipapi.location(callback, '8.8.8.8')            // Complete location for IP address 8.8.8.8
> { 
    ip: '8.8.8.8',
    city: 'Mountain View',
    region: 'California',
    country: 'US',
    postal: '94035',
    latitude: 37.386,
    longitude: -122.0838,
    timezone: 'America/Los_Angeles' 
}

ipapi.location(callback, '8.8.8.8', '', 'city')       // City for IP address 8.8.8.8
Mountain View

ipapi.location(callback, '8.8.8.8', '', 'country')       // Country for IP address 8.8.8.8
US
```



### With API Key

API key can be specified in the following ways : 

1. Inside `ipapi.js` by setting `API_KEY` variable
2. As a function argument e.g. `ipapi.location(callback, '8.8.8.8', 'secret-key')`


### Function arguments
- Optional arguments (e.g. IP address, key, field) can be an empty string `''` or `undefined`
