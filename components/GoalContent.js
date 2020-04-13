import * as React from 'react';
import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import HTML from 'react-native-render-html'

const monthNames = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember'
]

const isIos = Platform.OS === 'ios'

const createHtmlTagStyles = (baseSize) => {
    return {
        h1: {
            fontSize: baseSize + 4,
            paddingTop: 10,
        },
        h2: {
            fontSize: baseSize + 2,
            paddingTop: 10,
        },
        p: {
            fontSize: baseSize,
            paddingBottom: 10,
            textAlign: 'left'
        }
    }
}

const GoalContent = ({fontSize, item}) => {

    const publishDate = () => {
        const d = new Date(item.publish_date)
        return `${d.getDate()} ${monthNames[d.getMonth()]} ${d.getFullYear()}`
    }

    const htmlStyles = createHtmlTagStyles(fontSize)

    return (
        <View style={styles.goalContentView}>
            <View style={styles.headerView}>
                <Text style={styles.titleText}>{item.title}</Text>
                <Text style={styles.dateText}>{publishDate()}</Text>
            </View>
            <ScrollView style={styles.contentScrollView}>
                <HTML html={item.content} key={fontSize} tagsStyles={htmlStyles} />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    goalContentView: {
        backgroundColor: '#202020',
        paddingTop: isIos ? 80 : 10,
        marginTop: isIos ? 80 : 80
    },
    contentScrollView: {
        backgroundColor: '#fcfaf5',
        padding: 20
    },
    headerView: {
        backgroundColor: '#202020'
    },
    titleText: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white'
    },
    dateText: {
        color: '#999',
        fontSize: 14,
        textAlign: 'center',
        paddingBottom: 15
    },
    contentHtml: {
        fontSize: 24
    }
});

export default GoalContent

