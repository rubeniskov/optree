/**
* Returns a object with path tree of object structure.
*
* @method optree( obj )
* @param obj {Object}
* @param parseArray {Boolean}
* @return {Object}
* @example
*
*   const optree = require('optree');
*
*   const json    = {
*     'foo': [
*         'apple',
*         'pear'
*     ],
*     'bar': {
*         'apple': 0,
*         'pear': 1
*      }
*   };
*
*   var obj = optree(json);
*
*   {
*     "foo.0": 'apple',
*     "foo.1": 'pear',
*     "bar.apple": '0',
*     "bar.pear": '1',
*   }
*
*/

const nutol = require('nutol');

module.exports = function optree(obj, parr, parent, fmt) {
    var i, key, path,
        keys = obj.length !== +obj.length && Object.keys(obj),
        length = (keys || obj).length;

    for (i = 0,fmt = fmt || {}; i < length; i++) {
        key = keys ? keys[i] : i;
        path = parent ? parent + '.' + key : key;
        if (parr === true && nutol.isArray(obj[key]) || nutol.isPlainObject(obj[key])){
            optree(obj[key], parr, path, fmt);
        }
        else {
            fmt[path] = obj[key];
        }
    }

    return fmt;
}
