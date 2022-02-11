import WebViewBridge from 'react-native-webview-bridge';
import {StyleSheet} from 'react-native'
if (WebViewBridge) {
    WebViewBridge.onMessage = function (message) {
        console.log(message)
    };
    WebViewBridge.send("hello from webview");
}