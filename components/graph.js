import React from 'react';
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';
import { LineChart } from "react-native-chart-kit";

const d = [100, 175, 400, 120, 250,234,534];

const screenWidth = Dimensions.get("window").width
  
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
    labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        data: d,
        color: (opacity = 1) => `rgba(0,0,0, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
  ], 
};

export default function Graph(props) {
 
  return (
    
    <View style={styles.graphContainer}>
         <LineChart
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
        alignContent:"center"
    }
});
