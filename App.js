import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Header from './components/header'
import Graph from './components/graph'

export default function App() {
  const [headertext, setHeader] = useState("Dashboard");
  const headerController = (headername) => {
    setHeader(headername)
  }
  return (
    <View style={styles.container}>
      <Header title={headertext}/>
      <Graph />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
