import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useState } from 'react'
import GoalContent from './components/GoalContent'
import Controls from './components/Controls';

const App = () => {

  const [fontSize, setFontSize] = useState(16)

  const zoomIn = () => setFontSize(prev => Math.min(prev + 2, 28))
  const zoomOut = () => setFontSize(prev => Math.max(prev - 2, 14))

  return (
    <View style={styles.container}>
      <GoalContent fontSize={ fontSize }/>   
      <Controls zoomIn={zoomIn} zoomOut={zoomOut}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  }
});

export default App;