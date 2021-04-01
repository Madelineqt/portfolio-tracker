import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, NativeModules, Dimensions} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Header from './components/header';
import Dashboard from './components/dashboard';
const { StatusBarManager } = NativeModules;
// const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;
const STATUSBAR_HEIGHT = 0
export default function App() {
  const [headertext, setHeader] = useState("Dashboard");
  const headerController = (headername) => {
    setHeader(headername)
  }
  
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} >
        <Header title={headertext}/>
        <Dashboard/>
      </SafeAreaView>
    </SafeAreaProvider>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingBottom: 48 + STATUSBAR_HEIGHT
  },
});
