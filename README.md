# PGPluginDemo
自定义PhoneGap插件的Demo

相关命令
<br>1.创建插件
<br>plugman create --name IMPlugin --plugin_id com.im.plugin --plugin_version 1.0
<br>plugman platform add --platform_name ios

<br>2.创建工程
<br>cordova create PGPluginDemo com.plugin.demo PGPluginDemo
<br>cordova platform add ios

<br>3.添加插件
<br>cordova plugin add ../IMPlugin

<br>注意点：
<br>index.html中要注释meta信息

 <br>此处不注释掉，页面无法正常调用js
<br> <meta http-equiv="Content-Security-Policy" content="default-src 'self' data: gap: https://ssl.gstatic.com 'unsafe-eval'; style-src 'self' 'unsafe-inline'; media-src *; img-src 'self' data: content:;">

