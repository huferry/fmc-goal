import AsyncStorage from '@react-native-community/async-storage'

const Settings = {
    write: async (settings) => {
        try{
            const language = settings.language || await AsyncStorage.getItem('@language') || 'id'
            const fontSize = (settings.fontSize && settings.fontSize.toString()) || await AsyncStorage.getItem('@fontSize') || '16'
            await AsyncStorage.setItem('@language', language)
            await AsyncStorage.setItem('@fontSize', fontSize)
        } catch(err) {            
        }
    },

    read: async () => {
        const language = await AsyncStorage.getItem('@language') || 'id'
        const fontSize = parseInt(await AsyncStorage.getItem('@fontSize'))
        return {
                language,
                fontSize
            }
    }


}

export default Settings