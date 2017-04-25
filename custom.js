var file = require('./file.js');
var typeCast = require('./typecast.js');

/**
 * Gets value from config file
 * @param {any} key
 * @returns
 */
function getConfigValue(key) {
    var fileName = key.split('.')[0];
    var value = file.read(fileName);

    if (value) {
        var data;
        key.split('.').forEach(function (item, index) {
            var v = key.split('.').length;
            if (index > 1) {
                if (Array.isArray(data)) {
                    var dataItemArr = [];
                    data.forEach(function (dataItem, dataIndex) {
                        if (Array.isArray(dataItem) && key.split('.').length - 1 == index) {
                            dataItem.forEach(function (subItem, subItemIndex) {
                                dataItemArr.push(subItem[item]);
                            })

                        }
                        else {
                            dataItemArr.push(dataItem[item]);
                        }
                    })
                    data = dataItemArr;
                }
                else {
                    data = data[item];
                }
            }
            else if (index == 1) {
                data = value[item];
            }

        });
        if (data)
            return data;
        else return;
    }
    else
        return;
}

module.exports = {
    /**
     * Return the configuration value for specified key as string
     * @param {any} key
     * @returns
     */
    Item: function (key) {

        if (key) {
            var value = getConfigValue(key);
            if (value) return value;
            else return '';
        }
        else return '';
    },
    /**
     * Return the configuration value for specified key as string
     * Return default value, if specified key is not match
     * @param {any} key
     * @param {any} defaultValue
     * @returns
     */
    ItemWithDefault: function (key, defaultValue) {

        if (key) {
            var value = getConfigValue(key);
            if (value) return value;
            else return defaultValue;
        }
        else return defaultValue;
    },
    /**
     * Return the configuration value for specified key as boolean. Default value false, if key does't match
     * @param {any} key
     * @returns
     */
    ItemAsBoolean: function (key) {
        if (key) {
            var value = getConfigValue(key);
            return typeCast.GetAsBoolean(value);
        }
        else return false;
    },
    /**
     * Return the configuration value for specified key as number. Default value 0, if key doesn't match
     * @param {any} key
     * @returns
     */
    ItemAsNumber: function (key) {
        if (key) {
            var value = getConfigValue(key);
            return typeCast.GetAsNumber(value);
        }
        else return 0;

    },
    /**
     * Return the configuration values for specified key as collection. Default value [], if key doesn't match
     * @param {any} key
     * @returns
     */
    Items: function (key) {
        if (key) {
            return getConfigValue(key);
        }
        return [];
    }
};
