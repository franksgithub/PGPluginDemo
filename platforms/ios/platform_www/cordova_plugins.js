cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "com.im.plugin.IMPlugin",
        "file": "plugins/com.im.plugin/www/IMPlugin.js",
        "pluginId": "com.im.plugin",
        "clobbers": [
            "cordova.plugins.IMPlugin"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.2",
    "com.im.plugin": "1"
};
// BOTTOM OF METADATA
});