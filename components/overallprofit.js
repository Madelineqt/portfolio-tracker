import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Row, Col } from 'react-native-responsive-grid-system';

export default function OverallProfit(props) {
  return (
    <View>
      <Row>
          <Col colStyles={styles.col} xs={6} sm={6} md={6} lg={6}>
            <View ><Text >{props.stock.ticker} {props.stock.value}€ ({props.stock.profit})</Text></View>
          </Col>
      </Row>
    </View>
  );
}

const styles = StyleSheet.create({
    col:{
        paddingHorizontal: 10,
        paddingVertical:5,
        textAlign: "right"
    },

});
