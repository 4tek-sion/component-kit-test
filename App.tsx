/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {TestView} from "./src/TestView";
import { configure } from "mobx"
import { PortalProvider } from '@gorhom/portal'
import {GestureHandlerRootView} from "react-native-gesture-handler";
import { V99Layout } from 'react-native-v99-component-kit';
configure({ useProxies: "never" })

function App(): JSX.Element {
  const isDarkMode = true;

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.black : Colors.lighter,
  };

  return (
      <GestureHandlerRootView style={V99Layout.fill}>
        <SafeAreaView style={backgroundStyle}>
            <PortalProvider>
                <StatusBar
                    barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                    backgroundColor={backgroundStyle.backgroundColor}
                />
                <TestView/>
            </PortalProvider>
        </SafeAreaView>
      </GestureHandlerRootView>
  );
}


export default App;
