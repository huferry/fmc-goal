import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useState } from 'react'
import GoalContent from './components/GoalContent'
import Controls from './components/Controls';
import getData from './components/Data'
import LanguageModal from './components/LanguageModal'
import Settings from './components/Settings'

const App = () => {

  const [fontSize, setFontSize] = useState(16)
  const [content, setContent] = useState(emptyContent)
  const [languageModalVisible, setLanguageModalVisible] = useState(false)
  const [language, setLanguage] = useState('nl')

  const zoomIn = async () => {
    const newFontSize = Math.min(24, fontSize + 2)
    await Settings.write({fontSize: newFontSize })
    setFontSize(newFontSize)
  }  

  const zoomOut = async () => {
    const newFontSize = Math.max(fontSize - 2, 10)
    await Settings.write({fontSize: newFontSize})
    setFontSize(newFontSize)
  }

  const changeLanguage = () => setLanguageModalVisible(true)

  getData({culture: language}).then(arr => {
    setContent(() => arr[0])
  })

  Settings.read().then(settings => {
    setLanguage(settings.language)
    setFontSize(settings.fontSize)
  })

  return (
    <View style={styles.container}>
      <GoalContent fontSize={fontSize} item={content}/>   
      <Controls 
        zoomIn={zoomIn} 
        zoomOut={zoomOut} 
        changeLanguage={changeLanguage}/>

      <LanguageModal 
        modalVisible={languageModalVisible}
        language={language}
        onLanguageChanged={value => {
          setLanguage(value)
          setLanguageModalVisible(false)
          Settings.write({language: value})
        }}
        />

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

const emptyContent = {
  publish_date: '2020-04-12',
  culture: 'id',
  title: '--',
  content: '--'}
