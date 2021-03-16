import React from 'react';
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';
import { LineChart } from "react-native-chart-kit";


export default function Graph(props) {
    const screenWidth = Dimensions.get("window").width * 0.8
    
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
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
            color: (opacity = 1) => `rgba(0,0,0, ${opacity})`, // optional
            strokeWidth: 2 // optional
          }
        ],
        
      };
  return (
    <View style={styles.graphContainer}>
         <LineChart
        data={data}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    graphContainer:{
        justifyContent:"center",
        alignContent:"center"
    }
});
