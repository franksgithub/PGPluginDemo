# PGPluginDemo
自定义PhoneGap插件的Demo

相关命令
1.创建插件
plugman create --name IMPlugin --plugin_id com.im.plugin --plugin_version 1.0
plugman platform add --platform_name ios

2.创建工程
cordova create PGPluginDemo com.plugin.demo PGPluginDemo
cordova platform add ios

3.添加插件
cordova plugin add ../IMPlugin
