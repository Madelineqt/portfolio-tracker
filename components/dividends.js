import React from 'react';
import { StyleSheet, Text, View, Button,Card } from 'react-native';
import { Row, Col } from 'react-native-responsive-grid-system';

export default function Dividends(props) {
    return (
      <View style={styles.row}>
        <Row  >
          <Col colStyles={styles.col} xs={12} sm={12} md={12} lg={12}>
              <Text style={styles.text}>Dividends</Text>
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
    text:{
      textAlign:"center",
      
    }
  });
  