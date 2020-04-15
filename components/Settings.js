import AsyncStorage from '@react-native-community/async-storage'

const Settings = {
    write: async (settings) => {
        try{
            const currentSettings = await this.read()
            const updatedSettings = Object.assign(currentSettings, settings)
            await AsyncStorage.setItem('@language', updatedSettings.language || 'id')
        } catch(err) {            
        }
    },

    read: async () => {
        const language = (await AsyncStorage.getItem('@language')) || 'id'
        return {
            language
        }
    }


}

export default Settings