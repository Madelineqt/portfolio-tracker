import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, NativeModules } from 'react-native';
import Header from './components/header';
import Dashboard from './components/dashboard';
import { SafeAreaView } from 'react-navigation';
const { StatusBarManager } = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;
console.log(STATUSBAR_HEIGHT)
export default function App() {
  const [headertext, setHeader] = useState("Dashboard");
  const headerController = (headername) => {
    setHeader(headername)
  }
  return (
    <View style={styles.container}>
      <Header title={headertext}/>
      <Dashboard/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: STATUSBAR_HEIGHT,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
