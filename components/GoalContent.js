import * as React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
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

const GoalContent = ({fontSize}) => {

    const publishDate = () => {
        const d = new Date(example.publish_date)
        return `${d.getDate()} ${monthNames[d.getMonth()]} ${d.getFullYear()}`
    }

    const content = example.content

    const htmlStyles = createHtmlTagStyles(fontSize)

    return (
        <View style={styles.goalContentView}>
            <View style={styles.headerView}>
                <Text style={styles.titleText}>{example.title}</Text>
                <Text style={styles.dateText}>{publishDate()}</Text>
            </View>
            <ScrollView style={styles.contentScrollView}>
                <HTML html={content} key={fontSize} tagsStyles={htmlStyles} />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    goalContentView: {
        backgroundColor: '#000',
        paddingTop: 80,
        marginTop: 60
    },
    contentScrollView: {
        backgroundColor: '#fcfaf5',
        padding: 20
    },
    headerView: {
        backgroundColor: '#000'
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

const example = {
    publish_date: '2020-04-12T00:00:00.000Z',
    culture: 'id-id',
    title: 'The Fulfillment of Wisdom',
    content: `<h1>Pembukaan</h1>
    <p>Selamat merayakan PASKAH, yaitu kebangkitan Yesus Kristus dari antara orang mati. Mari kita membaca kisah kebangkitan Yesus Kristus (Markus 16:1-8).</p>
    <h1>Isi</h1>
    <p>Kebangkitan Yesus membawa:</p>  
    <h2>1.Pembaharuan hidup (Markus 16:1-6)</h2>
    <p>Tindakan wanita-wanita di pagi hari itu untuk merempahi mayat Yesus (yang seperti lazimnya dilakukan bagi orang yang meninggal) tidak ada gunanya lagi, karena Yesus sudah bangkit. Hanya orang mati yang perlu dirempahi atau diawetkan. 
    </p>
    <p>Jangan lagi hidup dalam kebiasaan atau berpikir seperti biasa, tetapi mulailah hidup baru dan penuh pengharapan bersama Yesus yang telah bangkit (2 Korintus 5:17). 
    </p>
    <p>Dan mengubah cara berpikir dengan hikmat Tuhan yang tidak terbatas, seperti tema kita pada bulan ini yaitu The Fulfilment of Wisdom (Mazmur 19:8 ID/NL, Roma 12:2). 
    </p>
    <h2>2.Hidup dengan iman (Markus 16:3-4) </h2>
    <p>Persoalan bagi Maria Magdalena dan dua rekannya waktu itu adalah batu besar yang menutup pintu kubur. Namun ketika mereka melihat dari dekat, batu itu sudah terguling, karena Yesus sudah bangkit.  
    </p>
    <p>Demikian juga ketika kita mengalami banyak persoalan (seperti batu penutup kubur/masalah), yang adalah sakit penyakit, tekanan, kesulitan dan pikiran yang terbelenggu (dengan trauma, tidak percaya, atau berpikir yang biasa -biasa saja) kita perlu BERIMAN bahwa Yesus yang telah bangkit dan hidup sudah membuka jalan bagi kita (Roma 4:17-21). 
    </p>
    <h2>3.Kemenangan dan mendorong kita memberitakan Injil (Markus 16:7-8) 
    </h2>
    <p>Berita injil adalah berita yang kudus dan tak terbinasakan (Markus 16:8b). 
    </p>
    <p>Hidup kekal ada dalam berita Injil itu sendiri, karena Injil adalah kekuatan Allah untuk menyelamatkan setiap orang yang percaya (Roma 1:16-17). 
    </p>
    <p>Inilah saatnya kita melakukan visi Tuhan dengan terus bersaksi dan memenangkan banyak jiwa bagi kerajaan Allah (Yohanes 3:17). 
    </p>
    <h1>Penutup</h1>
    <p>Dalam merayakan PASKAH hari ini, marilah kita menerima kebenaran Firman Tuhan ini, sehingga kita bangkit dan keluar dari hidup biasa -biasa saja. 
    </p><p>-</p>`
}
