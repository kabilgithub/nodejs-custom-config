
/* Using FS module to load file */
var fs = require('fs');

module.exports = {
  /**
   * Reads json file using readFileSync
   * returns json object
   * @returns
   */
  read: function (fileName) {
     try {
      var data = fs.readFileSync('./config/' + fileName +'.json', 'utf8');
      if (data)
        return JSON.parse(data);
      else
        return;
    }
    catch (err) {
      throw err;
    }
  }
}