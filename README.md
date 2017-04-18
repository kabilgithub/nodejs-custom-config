# Custom Config

Custom configuration for nodejs application

#  Installation

npm install custom-config

# Usage example

Create configuration file's as “config\custom.json, config\client.json”, etc in your project.

# File 1

custom.json

{
    "Cache": {
        "duration": "10"
    },
    "SampleData": {
        "expiry": 1,
        "pagesize": 5,
        "enable": true,
        "servers": [
            {
                "item": "123"
            },
            {
                "item": "abc"
            }
        ]
    }
}

# File 2

client.json

{
    "api": {
        "url": "www.test.com"
    }
}


# Code

var custConfig = require('custom-config');
# /* filename.key.key */
console.log(custConfig.Item('custom.Cache.duration'));  

console.log(custConfig.Item('client.api.url'));

console.log(custConfig.Items(' SampleData/servers)); 

# Options 

-	Item (Get configuration value for specified key as string)
-	Items (Get configuration values for specified key as collection)
-	ItemWithDefault (Get configuration value for specified key as string and return default value, if specified key doesn’t match)
-	ItemAsBoolean (Get configuration value for specified key as Boolean)
-	ItemAsNumber (Get configuration value for specified key as number)


