# custom-config

Custom configuration for nodejs application

#  Installation

npm install custom-config

# Usage example

Create custom configuration file  as “config\custom.json” in your project.

JSON

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

# Code

var custConfig = require('custom-config');

console.log(custConfig.Item('Cache/duration'));
console.log(custConfig.Items(' SampleData/servers));

# Options 

-	Item (Get configuration value for specified key as string)
-	Items (Get configuration values for specified key as collection)
-	ItemWithDefault (Get configuration value for specified key as string and return default value, if specified key doesn’t match)
-	ItemAsBoolean (Get configuration value for specified key as Boolean)
-	ItemAsNumber (Get configuration value for specified key as number)


