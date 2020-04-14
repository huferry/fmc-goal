import * as React from 'react';
import { useState } from 'react';
import { Modal, View, Text, TouchableWithoutFeedback, StyleSheet, FlatList } from 'react-native';
import { set } from 'react-native-reanimated';

const languages = ['id', 'nl', 'en']
const LanguageModal = ({language, modalVisible, onLanguageChanged}) => {
    
    const [selectedLanguage, setSelectedLanguage] = useState(0)
    const languageIdx = languages.indexOf(language)

    return (
        <Modal        
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <CustomPicker 
                label="Choose language:"
                data={["Indonesia", "Nederlands", "English"]}
                currentIndex={languageIdx}
                onSelected={ idx => {
                    onLanguageChanged(languages[idx])
                }}
            />
          </View>
        </View>
      </Modal>
    )
}

function CustomPicker({ label, data, currentIndex, onSelected }) {
    return (
      <>
        <Text style={styles.title}>{label}</Text>
        <View style={styles.wrapperHorizontal}>
          <FlatList
            bounces
            horizontal
            data={data}
            keyExtractor={(item, idx) => String(item)}
            renderItem={({ item, index }) => {
              const selected = index === currentIndex;
              return (
                <TouchableWithoutFeedback onPress={() => onSelected(index)}>
                  <View
                    style={[
                      styles.itemStyleHorizontal,
                      selected && styles.itemSelectedStyleHorizontal
                    ]}
                  >
                    <Text
                      style={{
                        margin: 4,
                        textAlign: "center",
                        color: selected ? "black" : "grey",
                        fontWeight: selected ? "bold" : "normal",
                        borderColor: 'orange',
                        borderWidth: selected ? 2 : 0,
                        borderRadius: 10,
                        padding: 8
                      }}
                    >
                      {item + ""}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              );
            }}
          />
        </View>
      </>
    );
  }
  

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 200,
      maxHeight: 150
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    },
    openButton: {
      backgroundColor: "#F194FF",
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });

export default LanguageModal;