let localSettings = {}

const Settings = {
    write: async (settings) => {
        try{
            const language = settings.language || 'id'
            const fontSize = settings.localSettings || 16
            
            localSettings = {
                language,
                fontSize
            }
        } catch(err) {            
        }
    },

    read: async () => {
        const language = localSettings.language || 'id'
        const fontSize = localSettings.fontSize || 16
        return {
                language,
                fontSize
            }
    }
}

export default Settings