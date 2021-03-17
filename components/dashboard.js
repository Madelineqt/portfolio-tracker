import React from 'react';
import { StyleSheet, Text, View, Button, Dimensions, ScrollView } from 'react-native';
import Graph from './graph'
import Stock from './stock'
import Dividends from './dividends'
import AddStock from './addstock'

let stocks = []
for (let i = 0; i < 10; i++) {
    stocks.push(<Stock key={i}/>);
}
export default function Dashboard(props) {
    
  return (
    <View style={styles.dashboardContainer}>
           <Graph />
           <ScrollView contentContainerStyle={styles.scrollView}>
                <Dividends/>
               {stocks}
               <AddStock/>
           </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    dashboardContainer:{
        justifyContent:"center",
        alignContent:"center"
    },
    scrollView:{
        flex: 1,
        marginHorizontal:10,
        alignItems: 'center',
    }
});