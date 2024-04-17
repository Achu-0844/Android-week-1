import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState('lightblue'); 
  const [textColor, setTextColor] = useState('darkslategray'); 

  const changeBackgroundColor = () => {
    setBackgroundColor(backgroundColor === 'lightblue' ? 'lightyellow' : 'lightblue');     setTextColor(textColor === 'darkslategray' ? 'white' : 'darkslategray'); 
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.text, { fontFamily: 'Georgia', color: textColor }]}>Akshaya Vardhini-22MIS1098</Text>
      <Button title="Change Background" onPress={changeBackgroundColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
    fontStyle: 'italic',
  },
});

export default App;
