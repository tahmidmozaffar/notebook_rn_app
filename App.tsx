/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import Analytics from 'appcenter-analytics';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import codePush from 'react-native-code-push';

import {Colors} from 'react-native/Libraries/NewAppScreen';

let codePushOptions = {checkFrequency: codePush.CheckFrequency.MANUAL};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={styles.buttonStyle}>
          <Button
            title="Send More asdasd"
            accessibilityLabel="send event"
            onPress={async () => {
              await Analytics.setEnabled(true);

              Analytics.trackEvent('Testing', {name: 'Tahmid', age: '32'})
                .then(() => {
                  console.log('event sent');
                })
                .catch(e => console.log(e));
            }}
          />
          <Button
            title="Download Codepush Update"
            accessibilityLabel="Download Codepush Update"
            onPress={() => {
              codePush.sync({
                installMode: codePush.InstallMode.IMMEDIATE,
              });
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  buttonStyle: {
    margin: 20,
  },
});

export default codePush(codePushOptions)(App);
