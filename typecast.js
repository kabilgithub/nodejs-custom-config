
/**
 * Convert value as boolean
 * @param {any} value
 * @returns
 */
module.exports = {
    GetAsBoolean: function (value) {
        if (typeof value == 'string')
            value = value.toLowerCase().trim();
        switch (value) {
            case "true": case "yes": case "1": case true: return true;
            case "false": case "no": case "0": case null: case false: return false;
            default: return false;
        }
    },
    /**
     * Convert value as number
     * @param {any} value
     * @returns
     */
    GetAsNumber: function (value) {
        if (typeof value == 'number') {
            return value;
        }
        else {
            var value = parseInt(value);
            if (isNaN(value)) {
                return 0;
            }
            else { return value };
        }
    },
    /**
     * Get value as array
     * @param {any} value
     * @returns
     */
    GetAsItems: function (value) {
        var i = 0;
        var arrData = [];
        for (var item in value) {
            var itemValue = value[item];
            for (var index in itemValue) {
                arrData[i] = itemValue[index];
                i += 1;
            }
        }
        return arrData;
    }
}
