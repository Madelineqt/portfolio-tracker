import React from 'react';
import { StyleSheet, Text, View, Button,Card ,Alert } from 'react-native';
import { Row, Col } from 'react-native-responsive-grid-system';


export default function Stock(props) {
  return (
    <View style={styles.row}>
        <Row >
        <Col colStyles={styles.col} xs={2} sm={2} md={2} lg={2}>
            <Text style={styles.text}>{props.stock.ticker}</Text>
        </Col>
        <Col colStyles={styles.col} xs={3} sm={3} md={3} lg={2}>
            <Text style={styles.text}>{props.stock.shares} shares</Text>
        </Col>
        <Col colStyles={styles.col} xs={2} sm={2} md={2} lg={2}>
            <Text style={styles.text}>{props.stock.price}€ ~</Text>
        </Col>
        <Col colStyles={styles.colfinal} xs={5} sm={5} md={5} lg={5}>
            <Text style={styles.text}>{props.stock.currentPrice}€ ({props.stock.profit})</Text>
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
