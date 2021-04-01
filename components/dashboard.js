import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, Dimensions, ScrollView } from 'react-native';
import Graph from './graph'
import Stock from './stock'
import Dividends from './dividends'
import AddStock from './addstock'
import axios from 'axios';

export default function Dashboard(props) {
  const [stocks, setStocks] = useState([]);
  const getStocks = async () => {
    return await axios.get("http://192.168.0.28:8080/api/getTodayOwnedStocks").then((response) => {
      return response.data
    }).catch(err => {
      console.log(err)
      createTwoAlert(err)
    })
  }
  useEffect(() => {
    getStocks().then(data => {
      setStocks(data)
    })

  }, [])
  return (
    <View style={styles.dashboardContainer}>
           <Graph />
           <ScrollView contentContainerStyle={styles.scrollView} >
                <Dividends/>
                {stocks.map(stock => <Stock key={stock._id} stock={stock}/>)}
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
        marginHorizontal:10,
        alignItems: 'center',
        flexGrow: 1,
    }
});