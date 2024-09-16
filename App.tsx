import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Task } from './src/components/task';
import { CardNumber } from './src/components/cardNumber';
import { InputAddTask } from './src/components/inputAddTask';


export default function App() {
  
  return (
    <View style={styles.container}>
      <View style={ {flexDirection: 'row', gap: 16} }>
      <CardNumber></CardNumber>
      <CardNumber></CardNumber>
      <CardNumber></CardNumber>
      </View>
      <InputAddTask></InputAddTask>
    
      <Task></Task>
      <Task></Task>
      <Task></Task>

      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28385E',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16 ,
    gap: 16,
  },
});
