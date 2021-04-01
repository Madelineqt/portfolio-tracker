import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';
import { LineChart } from "react-native-chart-kit";
import OverallProfit from './overallprofit'
import axios from 'axios';

export default function Graph(props) {
  const [values, setValues] = useState([0]);
  const [labels, setLabels] = useState([0]);
  const [currentGraph, setCurrentGraph] = useState([{
    ticker: "",
    value:"",
    profit: ""
  }]);
  const getStocksForGraph = async () => {
    return await axios.get("http://192.168.0.28:8080/api/getOverTimeOwnedStocks").then((response) => {
      return response.data
    }).catch(err => {
      console.log(err)
      createTwoAlert(err)
    })
  }
  useEffect(() => {
   getStocksForGraph().then(data => {
    console.log(data.map((element) => element.date))
    setValues(data.map((element) => element.value))
    setLabels(data.map((element) => element.date))
    let array = []
    console.log(labels.length)
    labels.forEach((label,index) => {
      console.log(index)
      if (index == 0) array.push(label)
      else if (index == labels.length - 1 ) array.push("Today")
      else {array.push("")}
    })
    console.log(array)
    setLabels(array)
    console.log(labels)
    setCurrentGraph({
      ticker: "You:",
      value: values[values.length - 1],
      profit: data[values.length - 1].profit
    })
    
   })
  }, [])
  
  
  const screenWidth = Dimensions.get("window").width * 0.95
    
  const chartConfig = {
      backgroundGradientFrom: "#FFFFFF",
      backgroundGradientFromOpacity: 0,
      backgroundGradientTo: "#FFFFFF",
      backgroundGradientToOpacity: 0.5,
      color: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
      strokeWidth: 2, // optional, default 3
      barPercentage: 0.5,
      useShadowColorFromDataset: false,
    };

  const data = {
      labels: labels,
      datasets: [
        {
          data: values,
          color: (opacity = 1) => `rgba(0,0,0, ${opacity})`, // optional
          strokeWidth: 2 // optional
        }
    ], 
  };

  return (
    
    <View style={styles.graphContainer}>
        <OverallProfit stock={{ticker:currentGraph.ticker, value:currentGraph.value, profit:currentGraph.profit}} />
         <LineChart
         style={styles.graph}
        data={data}
        width={screenWidth}
        height={220}
        segments={2}
        chartConfig={chartConfig}
        withDots={false}
        withOuterLines={false}
        withVerticalLines={false}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    graphContainer:{
        justifyContent:"center",
        alignContent:"center",
        textAlign:"center",
    },
    graph:{
      marginLeft:10
    }

});
