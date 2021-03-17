import React from 'react';
import { StyleSheet, Text, View, Button,Card } from 'react-native';
import { Row, Col } from 'react-native-responsive-grid-system';

export default function Stock(props) {
  return (
    <View style={styles.row}>
      <Row  >
        <Col colStyles={styles.col} xs={2} sm={2} md={2} lg={2}>
            <Text style={styles.text}>APPL</Text>
        </Col>
        <Col colStyles={styles.col} xs={4} sm={4} md={4} lg={4}>
            <Text style={styles.text}>200 shares</Text>
        </Col>
        <Col colStyles={styles.col} xs={2} sm={2} md={2} lg={2}>
            <Text style={styles.text}>130€ ~</Text>
        </Col>
        <Col colStyles={styles.colfinal} xs={4} sm={4} md={4} lg={4}>
            <Text style={styles.text}>260€ (+100%)</Text>
        </Col>
      </Row>
    </View>
    
  );
}

const styles = StyleSheet.create({
  row:{
    backgroundColor: "lightgray",
    borderRadius:5,
    marginVertical:5,
  },
  col:{
    paddingVertical:15,
    justifyContent:"center",
    alignContent:"center",
    textAlign:"center",
    borderRightColor:"black",
    borderRightWidth:1
  },
  colfinal:{
    paddingVertical:15,
    justifyContent:"center",
    alignContent:"center",
    textAlign:"center",
  },
  text:{
    textAlign:"center",
    
  }
});
