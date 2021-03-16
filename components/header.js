import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Header(props) {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{props.title}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#6EA3FF",
        width: "100%",
        height:"10%",
        justifyContent: "center"
    },
    text:{
        marginHorizontal: "5%",
        fontSize: 20
    }
});
