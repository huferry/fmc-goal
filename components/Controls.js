import * as React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

const Controls = ({ zoomOut, zoomIn, changeLanguage }) => {
    return (
        <View style={styles.controlsView}>            
            <View style={styles.buttonGroupLeftView}>
                <View style={styles.buttonView}>
                    <Icon
                        name="language"
                        style={styles.icon}
                        onPress={changeLanguage}
                    />
                </View>
            </View>
            <View style={styles.buttonGroupRightView}>
                <View style={styles.buttonView}>
                    <Icon
                        name="search-minus"
                        style={styles.icon}
                        onPress={zoomOut}
                    />
                </View>
                <View style={styles.buttonView}>
                    <Icon
                        name="search-plus"
                        style={styles.icon}
                        onPress={zoomIn}
                    />
                </View>
            </View>
        </View>
    );
}

const isIos = Platform.OS === 'ios'


const styles = StyleSheet.create({
    controlsView: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: isIos? 10 : 10,
        backgroundColor: '#202020',
        height: isIos ? 140 :100,
        minWidth: '100%'
    },
    buttonView: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: '#202020',
        maxWidth: 50
    },
    buttonGroupRightView: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        flex: 1
    },
    buttonGroupLeftView: {
        flexDirection: 'row',
        flex: 1
    },
    icon: {
        color: 'white',
        backgroundColor: '#202020',
        borderRadius: 10,
        fontSize: 30,
        marginRight: 20
    }
});

export default Controls;