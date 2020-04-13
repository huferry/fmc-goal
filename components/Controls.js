import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

const Controls = ({zoomOut, zoomIn}) => {
    return (
        <View style={styles.controlsView}>
            <Icon 
                name="search-minus" 
                style={styles.icon} 
                onPress={zoomOut}
            />
            <Icon 
                name="search-plus" 
                style={styles.icon}
                onPress={zoomIn}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    controlsView: {
        flexDirection: 'row',
        padding: 4,
        height: 150,        
    },
    icon: {
        fontSize: 50
    }
});

export default Controls;